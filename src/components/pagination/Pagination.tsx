import { Pagination } from "@nextui-org/pagination";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Props {
  total: number;
}

export const CustomPagination = ({ total }: Props) => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const router = useRouter();

  const onHandlePageChange = (page: number) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("page", page.toString());

    router.replace(`${pathname}?${query.toString()}`);
  };

  const onRowSizeChange = (size: number) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("limit", size.toString());

    router.replace(`${pathname}?${query.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 items-start md:flex-row md:items-center justify-between mt-2 bg-gameRanks_secondary p-1 rounded-md">
      <Pagination
        classNames={{
          wrapper: "overflow-visible h-8 rounded bg-gameRanks_secondary",
          item: "w-8 h-8 bg-transparent hover:text-black text-default-300",
          cursor:
            "bg-gameRanks_tertiary shadow-lg text-gameRanks_primary font-bold",
        }}
        page={parseInt(searchParams.get("page") ?? "1")}
        total={total}
        onChange={(page) => onHandlePageChange(page)}
        size="sm"
      />
      <select
        className="rounded text-default-300 bg-gameRanks_secondary h-8 focus:outline-none px-2"
        value={parseInt(searchParams.get("limit") ?? "10")}
        onChange={(e) => onRowSizeChange(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};
