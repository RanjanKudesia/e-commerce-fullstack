import { ProductStateProvider } from "./context"









export default function ProductLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params:{id:string}
}) {
    return (
        <section>
            <ProductStateProvider params={params}>
                {children}
            </ProductStateProvider>
        </section>
    )
}