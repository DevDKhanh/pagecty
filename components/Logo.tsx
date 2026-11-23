/* eslint-disable @next/next/no-img-element */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`}>
      <img
        src={light ? "/logo-mark-light.png" : "/logo-mark.png"}
        alt=""
        width={235}
        height={177}
        className="logo__mark"
      />
      <span className="logo__text">
        <strong>FARUIT</strong>
        <small>Smart Rack</small>
      </span>
    </span>
  );
}
