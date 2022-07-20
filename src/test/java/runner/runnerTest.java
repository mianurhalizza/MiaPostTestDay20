package runner;

	import io.cucumber.testng.AbstractTestNGCucumberTests;
	import io.cucumber.testng.CucumberOptions;

	@CucumberOptions(
			features = "src/test/resources/featuresFiles", 
			glue="definitions",
			plugin= {
				"pretty",
					"html: target/cucumber-report",
					"json: target/cucumber-report/Cucumber2022.json"
			})
	public class runnerTest extends AbstractTestNGCucumberTests {

}
