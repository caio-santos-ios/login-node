import Link from "next/link";

const Home = () => {
  return (
    <main className="main">
      <section className="section_form">

        <form className="form">
            <h2 className="title_form">Login</h2>
            <label className="label_form" htmlFor="email">
              <span className="title_label_form">E-mail</span>
              <input className="input_form" type="text" name="email" id="email" placeholder="E-mail" />
            </label>
            
            <label className="label_form" htmlFor="password">
              <span className="title_label_form">Senha</span>
              <input className="input_form" type="password" name="password" id="password" placeholder="Senha" />
            </label>
            <button className="btn_form" type="button">Entrar</button>
        </form>
        <span className="text-primary-color">Ou</span>
        <Link href="/register" className="text-primary-color p-1 no-underline hover:underline" type="Link">Criar conta</Link>
      </section>
    </main>
  );
}

export default Home;