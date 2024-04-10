import { DataTable } from "mantine-datatable";
import Link from "next/link";

export default function Another () {
    return (
        <>
            <Link href={'/'}> Home Page</Link>
            <DataTable records={[]} columns={[]} />
        </>
    )
};