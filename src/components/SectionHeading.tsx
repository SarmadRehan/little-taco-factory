type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

/** A hand-lettered script line over tall capitals, like a painted taqueria sign. */
export function SectionHeading({ eyebrow, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-script text-3xl text-chile sm:text-4xl">{eyebrow}</p>
      <h2 id={id} className="mt-1 font-display text-5xl uppercase leading-none tracking-wide text-balance sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-clay">{intro}</p>}
    </div>
  );
}
