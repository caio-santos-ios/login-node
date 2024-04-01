import { Ilayout } from "@/@types/layout";
import { Metadata } from "next";

const metadata: Metadata = {
    title: "Inscrever-se",
    description: "Página para se cadastrar no site."
}

const RegisterLayout = ({children}: Ilayout) => { <html lang="pt-Br"><body>{children}</body></html> }

export default RegisterLayout;