package foradacaixa;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class ClientePage extends ClienteElementMap {

	public ClientePage() {
		PageFactory.initElements(TestRule.getDriver(), this);
	}

	public void InformarDadosIdentificacaoPF() {
		fisica.click();
		cpf_cnpj.sendKeys("404.357.110-08");
		nome_razaosocial.sendKeys("Automação forda da Caixa");
		email.sendKeys("isabela@teste.com.br");
		data_nascimento.sendKeys("11/04/1984");

		Select cmbSexo = new Select(sexo);
		cmbSexo.deselectByVisibleText("Feminino");

		Select cmbEstado_Civil = new Select(estado_civil);
		cmbEstado_Civil.deselectByVisibleText("Casado");

	}

	public void clicarAvancar() {
		avancar.click();

	}

	public void informaEnderecos() {

		// Endereco Principal

		endcp_cep.sendKeys("38400-762");
		endcp_endereco.sendKeys("Rua Brasília");
		endcp_numero.sendKeys("355");
		endcp_complemento.sendKeys("bl 26");
		endcp_cidade.sendKeys("Uberlândia");
		Select cmbEstadoEndPrincipal = new Select(endcp_estado);
		cmbEstadoEndPrincipal.deselectByVisibleText("MG");
		endcp_telefone.sendKeys("(34) 3257-8422");
		endcp_celular.sendKeys("(34) 99948-5987");

		// Endereco Cobrança

		endc_cep.sendKeys("38400-762");
		endc_endereco.sendKeys("Rua Brasília");
		endc_numero.sendKeys("355");
		endc_complemento.sendKeys("bl 26");
		endc_cidade.sendKeys("Uberlândia");
		Select cmbEstadoEndCobranca = new Select(endc_estado);
		cmbEstadoEndPrincipal.deselectByVisibleText("MG");
		endc_telefone.sendKeys("(34) 3257-8422");
		endc_celular.sendKeys("(34) 99948-5987");

	}

	public void clicarSalvar() {
		salvar.click();

	}

	public void verificarMensagemSucesso() {
		// TODO Auto-generated method stub

	}

}
