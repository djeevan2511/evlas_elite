import { LinkButton, Section } from "../components/ui";

export default function NotFound() {
  return (
    <Section className="pt-44 pb-40 text-center">
      <p className="font-serif text-7xl text-rose">404</p>
      <h1 className="font-serif text-3xl text-charcoal mt-4">This page slipped away</h1>
      <p className="text-stone mt-3">The page you're looking for doesn't exist.</p>
      <LinkButton to="/" variant="primary" size="md" className="mt-8">Back to Home</LinkButton>
    </Section>
  );
}
