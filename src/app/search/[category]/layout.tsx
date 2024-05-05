import { SearchStateProvider } from "./context"









export default function SearchLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { category: string }
}) {
    return (
        <section>
            <SearchStateProvider params={params}>
                {children}
            </SearchStateProvider>
        </section>
    )
}