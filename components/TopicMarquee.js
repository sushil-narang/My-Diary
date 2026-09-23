/** Infinite horizontal ribbon of topics. Pure CSS animation, decorative only. */
export default function TopicMarquee({ items = [] }) {
  if (items.length === 0) return null;

  const group = (
    <div className="marquee-group">
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </div>
  );
}
