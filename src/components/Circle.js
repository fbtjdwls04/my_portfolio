export default function Circle({ size, left, bottom, backgroundColor }) {
  return (
    <div
      className="rounded-[50%] absolute hover:scale-110"
      style={{
        height: size,
        width: size,
        backgroundColor,
        left: `calc(50% - ${left}px)`,
        bottom,
        transition: "all 1s",
      }}
    ></div>
  );
}
