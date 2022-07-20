package definisions;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PalindromeDefinisions {
	String testPalindrome;
	boolean isiPalindrome;

	@Given("Saya masukin string {string}")
	public void Saya_masukin_string(String string) {
	    testPalindrome = string;
	}

	@When("Saya test apakah palindrome")
	public void Saya_test_apakah_palindrome() {
		String hasilBalik = new StringBuilder(testPalindrome).reverse().toString();
	   isiPalindrome = testPalindrome.equalsIgnoreCase(hasilBalik);
			  
	}
	    
  @Then("hasilnya harus {string}")
	 public void hasilnya_harus(String string) {
	 boolean expectResult = Boolean.parseBoolean(string); 
		 if (expectResult) {
			 assertTrue(isiPalindrome);		 
		 } else {
			 assertFalse(isiPalindrome);
		 }
	}

}
