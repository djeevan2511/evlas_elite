import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { SERVICES, whatsappHref } from "../lib/business";
import { AnchorButton, Button, Icon, Section } from "../components/ui";
import { PageHero } from "../components/sections";

const STEPS = ["Service", "Date", "Time", "Details", "Confirm"];
const TIME_SLOTS = ["9:30 am", "10:30 am", "11:30 am", "12:30 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"];
// A few illustrative unavailable slots for the prototype.
const UNAVAILABLE = new Set(["11:30 am", "3:00 pm"]);

function useCalendar(monthOffset: number) {
  return useMemo(() => {
    const base = new Date();
    const d = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
    const year = d.getFullYear();
    const month = d.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const cells: ({ date: Date; disabled: boolean } | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      cells.push({ date, disabled: date < today });
    }
    return { label: d.toLocaleDateString("en-IN", { month: "long", year: "numeric" }), cells };
  }, [monthOffset]);
}

export default function Book() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [monthOffset, setMonthOffset] = useState(0);

  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const [form, setForm] = useState({ name: "", phone: "", notes: "" });

  const cal = useCalendar(monthOffset);

  const canNext =
    (step === 0 && service) ||
    (step === 1 && date) ||
    (step === 2 && time) ||
    (step === 3 && form.name && form.phone) ||
    step === 4;

  const dateLabel = date
    ? date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  const submit = () => {
    navigate("/booking-success", {
      state: { service, date: dateLabel, time, name: form.name },
    });
  };

  const next = () => (step === 4 ? submit() : setStep((s) => s + 1));

  const whatsappMsg = `Hi EVLAS ELITE, I'd like to book${service ? ` ${service}` : " an appointment"}${
    dateLabel ? ` on ${dateLabel}` : ""
  }${time ? ` at ${time}` : ""}.`;

  return (
    <>
      <PageHero eyebrow="Book Appointment" title="Reserve your visit" sub="A few quick steps. This is a demo booking flow — ready to connect to a real booking system." />

      <Section className="pb-24 lg:pb-32">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1 flex items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    i < step ? "bg-rose text-ivory" : i === step ? "bg-charcoal text-ivory" : "bg-card border border-border text-stone"
                  }`}
                >
                  {i < step ? <Icon name="check" className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-[0.62rem] uppercase tracking-[0.12em] hidden sm:block ${i === step ? "text-charcoal" : "text-stone"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && <div className={`flex-1 h-px mx-2 ${i < step ? "bg-rose" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto rounded-3xl bg-card border border-border p-6 sm:p-10 min-h-[360px]">
          {/* Step 1: Service */}
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Choose a service</h2>
              <div className="space-y-6">
                {SERVICES.map((cat) => (
                  <div key={cat.slug}>
                    <p className="text-[0.64rem] uppercase tracking-[0.2em] text-rose mb-3">{cat.category}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cat.items.map((name) => (
                        <button
                          key={name}
                          onClick={() => setService(name)}
                          className={`text-left rounded-xl border p-3 flex items-center gap-3 transition-all ${
                            service === name ? "border-rose bg-blush/40 ring-1 ring-rose" : "border-border hover:border-charcoal/40"
                          }`}
                        >
                          <img src={cat.image} alt="" className="w-11 h-11 rounded-lg object-cover bg-champagne shrink-0" />
                          <span className="font-serif text-base text-charcoal flex-1">{name}</span>
                          {service === name && (
                            <span className="w-5 h-5 rounded-full bg-rose text-ivory flex items-center justify-center shrink-0">
                              <Icon name="check" className="w-3 h-3" />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date — compact centered calendar */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl text-charcoal mb-6 text-center">Choose a date</h2>
              <div className="mx-auto max-w-[320px]">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setMonthOffset((m) => Math.max(0, m - 1))} disabled={monthOffset === 0} className="p-1.5 rounded-full border border-border disabled:opacity-30 hover:bg-blush">
                    <Icon name="chevronL" className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium text-charcoal">{cal.label}</span>
                  <button onClick={() => setMonthOffset((m) => Math.min(3, m + 1))} disabled={monthOffset === 3} className="p-1.5 rounded-full border border-border disabled:opacity-30 hover:bg-blush">
                    <Icon name="chevronR" className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div key={i} className="text-[0.6rem] uppercase tracking-wide text-stone py-1.5">{d}</div>
                  ))}
                  {cal.cells.map((c, i) =>
                    c === null ? (
                      <div key={i} />
                    ) : (
                      <button
                        key={i}
                        disabled={c.disabled}
                        onClick={() => setDate(c.date)}
                        className={`aspect-square rounded-lg text-[0.8rem] flex items-center justify-center transition-colors ${
                          c.disabled
                            ? "text-stone/30 cursor-not-allowed"
                            : date?.toDateString() === c.date.toDateString()
                            ? "bg-charcoal text-ivory font-medium"
                            : "text-ink hover:bg-blush"
                        }`}
                      >
                        {c.date.getDate()}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Time */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl text-charcoal mb-2 text-center">Choose a time</h2>
              <p className="text-sm text-stone mb-6 text-center">{dateLabel} · demo availability</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
                {TIME_SLOTS.map((t) => {
                  const off = UNAVAILABLE.has(t);
                  return (
                    <button
                      key={t}
                      disabled={off}
                      onClick={() => setTime(t)}
                      className={`py-2.5 rounded-xl border text-sm transition-all ${
                        off
                          ? "border-border text-stone/40 line-through cursor-not-allowed"
                          : time === t
                          ? "border-rose bg-charcoal text-ivory"
                          : "border-border text-ink hover:border-charcoal/50"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Your details</h2>
              <div className="space-y-4">
                <Field label="Full name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
                <Field label="Phone number *" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91 " type="tel" />
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-stone mb-2">Additional notes (optional)</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    placeholder="Anything we should know?"
                    className="w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-ink focus:outline-none focus:border-rose resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirm */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Confirm appointment</h2>
              <dl className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                <Row label="Service" value={service} />
                <Row label="Date" value={dateLabel} />
                <Row label="Time" value={time} />
                <Row label="Name" value={form.name} />
                <Row label="Phone" value={form.phone} />
                {form.notes && <Row label="Notes" value={form.notes} />}
              </dl>
              <p className="mt-5 text-xs text-stone leading-relaxed">
                This is a demo request — submitting sends a booking request, not a
                guaranteed appointment. On the live site this connects to the salon's
                booking system.
              </p>
              <AnchorButton href={whatsappHref(whatsappMsg)} target="_blank" variant="whatsapp" size="md" className="mt-5 w-full">
                <Icon name="whatsapp" className="w-4 h-4" /> Prefer WhatsApp? Message us
              </AnchorButton>
            </div>
          )}
        </div>

        {/* Nav buttons */}
        <div className="max-w-2xl mx-auto flex items-center justify-between mt-6">
          <Button variant="outline" size="md" onClick={() => setStep((s) => Math.max(0, s - 1))} className={step === 0 ? "invisible" : ""}>
            <Icon name="chevronL" className="w-4 h-4" /> Back
          </Button>
          <Button variant="primary" size="md" onClick={next} disabled={!canNext}>
            {step === 4 ? "Confirm Appointment" : "Continue"}
            {step !== 4 && <Icon name="arrow" className="w-4 h-4" />}
          </Button>
        </div>
      </Section>
    </>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-stone mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-ink focus:outline-none focus:border-rose"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-3.5 bg-ivory/50">
      <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-stone pt-0.5">{label}</dt>
      <dd className="text-sm text-charcoal text-right max-w-[70%]">{value}</dd>
    </div>
  );
}
