import { Link, useLocation } from "react-router";
import { callHref, whatsappHref } from "../lib/business";
import { AnchorButton, Icon, LinkButton, Section } from "../components/ui";

type State = { service?: string; date?: string; time?: string; name?: string };

export default function BookingSuccess() {
  const { state } = useLocation() as { state: State | null };
  const s = state ?? {};

  const msg = `Hi EVLAS ELITE, I've just requested an appointment${
    s.service ? ` for ${s.service}` : ""
  }${s.date ? ` on ${s.date}` : ""}${s.time ? ` at ${s.time}` : ""}.`;

  return (
    <Section className="pt-40 pb-28 lg:pt-48">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-rose text-ivory flex items-center justify-center mx-auto animate-fade-up">
          <Icon name="check" className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-8 leading-tight">
          Your appointment request has been received
        </h1>
        <p className="mt-4 text-stone">
          {s.name ? `Thank you, ${s.name}. ` : "Thank you. "}
          The salon will confirm your booking shortly.
        </p>

        {(s.service || s.date || s.time) && (
          <dl className="mt-10 text-left rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {s.service && <Item label="Service" value={s.service} />}
            {s.date && <Item label="Date" value={s.date} />}
            {s.time && <Item label="Time" value={s.time} />}
            {s.name && <Item label="Name" value={s.name} />}
          </dl>
        )}

        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          <AnchorButton href={whatsappHref(msg)} target="_blank" variant="whatsapp" size="md">
            <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp Salon
          </AnchorButton>
          <AnchorButton href={callHref} variant="outline" size="md">
            <Icon name="phone" className="w-4 h-4" /> Call Salon
          </AnchorButton>
          <AnchorButton href={calendarHref(s)} download="evlas-elite-appointment.ics" variant="outline" size="md">
            <Icon name="calendar" className="w-4 h-4" /> Add to Calendar
          </AnchorButton>
          <LinkButton to="/" variant="primary" size="md">Back to Home</LinkButton>
        </div>

        {!s.service && (
          <p className="mt-8 text-xs text-stone">
            No booking details found.{" "}
            <Link to="/book" className="text-rose underline">Start a booking</Link>.
          </p>
        )}
      </div>
    </Section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-stone">{label}</dt>
      <dd className="text-sm text-charcoal text-right">{value}</dd>
    </div>
  );
}

function calendarHref(s: State) {
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:EVLAS ELITE — ${s.service ?? "Appointment"}`,
    `DESCRIPTION:Appointment request${s.time ? ` at ${s.time}` : ""}`,
    "LOCATION:EVLAS ELITE A Beauty Saloon, Khajaguda, Hyderabad",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`;
}
