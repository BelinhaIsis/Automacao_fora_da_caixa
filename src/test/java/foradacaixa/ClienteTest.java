package foradacaixa;

import org.junit.runner.RunWith;
import org.junit.runner.Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
                           

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Cliente.feature",glue = { "" }, monochrome = true, dryRun = false)
 
public class ClienteTest {

}
