"use client"

const MARQUEE_ITEMS = [
  "100% Natural",
  "UAE & Kerala",
  "No Preservatives",
  "Farm Fresh",
  "Guilt-Free Joy",
  "Real Fruit Flavours",
  "Family Crafted",
  "Bold Flavors",
  "100% Natural",
  "UAE & Kerala",
  "No Preservatives",
  "Farm Fresh",
  "Guilt-Free Joy",
  "Real Fruit Flavours",
  "Family Crafted",
  "Bold Flavors",
]

export default function ValuesStrip() {
  return (
    <section className="bg-[#111010] py-4 overflow-hidden border-y border-[#111010]">
      <div
        className="flex items-center gap-0 animate-marquee"
        style={{ width: "max-content" }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-medium text-[13px] text-[#FAFAF8]/80 uppercase tracking-[0.12em] whitespace-nowrap px-7">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A000] flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  )
}
