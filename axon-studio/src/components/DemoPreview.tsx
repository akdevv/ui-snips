import { useLayoutEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AnalyticsUpIcon,
  AppWindowIcon,
  ArrowDataTransferHorizontalIcon,
  ArrowDown01Icon,
  Bug01Icon,
  Calculator01Icon,
  CleaningBucketIcon,
  CloudSnowIcon,
  ConstructionIcon,
  DashboardSquare01Icon,
  DeliveryBox01Icon,
  FlashIcon,
  FloorPlanIcon,
  House01Icon,
  JusticeScale01Icon,
  Key01Icon,
  Leaf01Icon,
  PaintBrush01Icon,
  PoolIcon,
  RealEstate01Icon,
  Search01Icon,
  Shield01Icon,
  ToolsIcon,
  UserCircle02Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";

type IconData = typeof Wrench01Icon;
type Cat = { name: string; icon: IconData; bg: string };

const homeServices: Cat[] = [
  { name: "Plumbing", icon: Wrench01Icon, bg: "bg-sky-100" },
  { name: "Electrician", icon: FlashIcon, bg: "bg-amber-100" },
  { name: "HVAC", icon: CloudSnowIcon, bg: "bg-cyan-100" },
  { name: "Roofing", icon: House01Icon, bg: "bg-orange-100" },
  { name: "Landscaping", icon: Leaf01Icon, bg: "bg-emerald-100" },
  { name: "Pest control", icon: Bug01Icon, bg: "bg-lime-100" },
  { name: "Cleaning", icon: CleaningBucketIcon, bg: "bg-teal-100" },
  { name: "Painting", icon: PaintBrush01Icon, bg: "bg-rose-100" },
  { name: "Flooring", icon: FloorPlanIcon, bg: "bg-yellow-100" },
  { name: "Locksmith", icon: Key01Icon, bg: "bg-indigo-100" },
  { name: "Moving", icon: DeliveryBox01Icon, bg: "bg-violet-100" },
  { name: "Windows", icon: AppWindowIcon, bg: "bg-blue-100" },
  { name: "Handyman", icon: ToolsIcon, bg: "bg-stone-200" },
  { name: "Construction", icon: ConstructionIcon, bg: "bg-orange-100" },
  { name: "Pool service", icon: PoolIcon, bg: "bg-sky-100" },
];

const professional: Cat[] = [
  { name: "Legal", icon: JusticeScale01Icon, bg: "bg-slate-200" },
  { name: "Accounting", icon: Calculator01Icon, bg: "bg-amber-100" },
  { name: "Insurance", icon: Shield01Icon, bg: "bg-green-100" },
  { name: "Real estate", icon: RealEstate01Icon, bg: "bg-red-100" },
  { name: "Finance", icon: AnalyticsUpIcon, bg: "bg-emerald-100" },
];

const CatChip = ({ name, icon, bg }: Cat) => (
  <div className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-100 p-2 transition-colors hover:border-gray-300">
    <span
      className={`grid h-9 w-9 place-items-center rounded-full text-gray-700 ${bg}`}
    >
      <HugeiconsIcon icon={icon} size={18} />
    </span>
    <span className="text-center text-[10px] leading-tight text-gray-600">
      {name}
    </span>
  </div>
);

const InputBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="grid h-10.5 w-10.5 flex-none place-items-center rounded-md bg-[#1b1b22] text-white"
  >
    {children}
  </button>
);

const DESIGN_W = 896;
const DESIGN_H = 511;

function DemoPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / DESIGN_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="rise mx-auto mt-16 max-w-4xl px-4 sm:px-0"
      style={{ animationDelay: "360ms" }}
    >
      <div ref={ref} style={{ height: DESIGN_H * scale }}>
        <div
          className="origin-top-left"
          style={{ width: DESIGN_W, transform: `scale(${scale})` }}
        >
          <div className="bg-yellow rounded-2xl p-2 text-left shadow-2xl">
            <div className="aspect-video overflow-hidden rounded-xl bg-white text-[#1a1a1a]">
              {/* top nav */}
              <div className="flex items-center gap-4 bg-[#1b1b22] px-4 py-3 text-white">
                <span className="flex items-center gap-1.5 text-sm font-extrabold">
                  ◎ Axon
                </span>
                <nav className="hidden gap-4 text-xs text-white/60 sm:flex">
                  <span className="font-semibold text-white underline underline-offset-4">
                    Scout
                  </span>
                  <span>Prospect List</span>
                  <span>Radar</span>
                  <span>Past Searches</span>
                </nav>
                <HugeiconsIcon
                  icon={UserCircle02Icon}
                  size={24}
                  className="ml-auto text-white/70"
                />
              </div>
              {/* body */}
              <div className="p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* niche + open category picker */}
                  <div className="relative">
                    <p className="mb-1 text-xs font-medium text-gray-500">
                      Industry Niche
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-400">
                        e.g. dental clinics, law firms
                      </div>
                      <InputBtn>
                        <HugeiconsIcon icon={DashboardSquare01Icon} size={16} />
                      </InputBtn>
                      <InputBtn>
                        <HugeiconsIcon
                          icon={ArrowDataTransferHorizontalIcon}
                          size={16}
                        />
                      </InputBtn>
                    </div>
                    {/* open dropdown */}
                    <div className="absolute top-full left-0 z-20 mt-2 w-[116%] rounded-lg border border-gray-200 bg-white p-3 shadow-xl">
                      <p className="mb-2 text-[10px] font-semibold tracking-wider text-gray-400">
                        HOME SERVICES
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        {homeServices.map((c) => (
                          <CatChip key={c.name} {...c} />
                        ))}
                      </div>
                      <p className="mt-3 mb-2 text-[10px] font-semibold tracking-wider text-gray-400">
                        PROFESSIONAL
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        {professional.map((c) => (
                          <CatChip key={c.name} {...c} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* region */}
                  <div>
                    <p className="mb-1 text-xs font-medium text-gray-500">
                      Region
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-400">
                        e.g. Austin, TX
                      </div>
                      <InputBtn>
                        <HugeiconsIcon
                          icon={ArrowDataTransferHorizontalIcon}
                          size={16}
                        />
                      </InputBtn>
                    </div>
                  </div>
                </div>
                {/* results row */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-gray-500">Scrape Results:</span>
                  <div className="flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-2 text-xs text-gray-500">
                    All results
                    <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                  </div>
                  <button className="bg-yellow text-on-light ml-auto inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-bold">
                    <HugeiconsIcon icon={Search01Icon} size={16} /> Run Scout
                  </button>
                </div>
                {/* credits footer */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-gray-400">
                  <span>0 searches today</span>
                  <span className="text-gray-300">|</span>
                  <span>220/300 daily credits used</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoPreview;
