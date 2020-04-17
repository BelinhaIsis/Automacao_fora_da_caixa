package foradacaixa;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ClienteSteps {

	@Given("^efetuei login no sistema$")
	public void efetuei_login_no_sistema() throws Throwable {
		
		LoginPage loginPage = new LoginPage();
		loginPage.efetuarLogin();
		
	}

	@Given("^acessei o menu Clientes >> Inserir$")
	public void acessei_o_menu_Clientes_Inserir() throws Throwable {
	        MenusPage menusPage = new MenusPage();
	        menusPage.acessarMenuClienteIseris();
	}

	@When("^na tela Dados de Identificacao informo os dados de Pessoa Fisica$")
	public void na_tela_Dados_de_Identificacao_informo_os_dados_de_Pessoa_Fisica() throws Throwable {
		ClientePage clientePage = new ClientePage ();
		clientePage.InformarDadosIdentificacaoPF();
	}

	@When("^na tela Dados de Identificacao clico em Avancar$")
	public void na_tela_Dados_de_Identificacao_clico_em_Avancar() throws Throwable {
		ClientePage clientePage = new ClientePage ();
		clientePage.clicarAvancar();
	}

	@When("^na tela Enderecos informo os enderecos$")
	public void na_tela_Enderecos_informo_os_enderecos() throws Throwable {
		ClientePage clientePage = new ClientePage ();
		clientePage.informaEnderecos();
	}

	@When("^na tela Enderecos clico em Salvar$")
	public void na_tela_Enderecos_clico_em_Salvar() throws Throwable {
		ClientePage clientePage = new ClientePage ();
		clientePage.clicarSalvar();
	}

	@Then("^na tela Enderecos sera exibida mensagem de sucesso$")
	public void na_tela_Enderecos_sera_exibida_mensagem_de_sucesso() throws Throwable {
		ClientePage clientePage = new ClientePage ();
		clientePage.verificarMensagemSucesso();
	}

	@Then("^efetuarei logout do sistema$")
	public void efetuarei_logout_do_sistema() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

}
