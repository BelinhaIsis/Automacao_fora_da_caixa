package foradacaixa;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;

public class TestRule {

	private static  WebDriver driver;
	
	@Before
	
	public void beforeCenario() {
		System.setProperty("webdriver.chrome.driver", "scr/teste/resources/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.navigate().to("file:///C:/Users/JoaoCaboclo/Desktop/ForaCaixa2/Versão%202/index.html");
		
	}
	
	public static WebDriver getDriver() {
		return driver;
		
		
		
	}
}
