// Subjective-C Concept
// Written October 25, 1998
// Superset of C
// Speed is faster than or is fast as C++/Objective-C
// Works decently well with C++ and Java syntax highlighting
// --- //

// No includes required, everything is available out of the box; only pay for what you use, Subjective-C will not include entire header files and only individual functions/macros/constants


int main() {
    stdio.printf("Hello, world!"); // Header namespaces
    int x = 3;
    string() text = ""; // Basic string type - similar to char[] but without a null terminator and can be resizable
    string(5, 1) sizedString = "abcde"; // Set maximum and minimum string size (inclusive)
    // All functions using char * have been replaced with new versions, but can be accessed by prefixing their namespaces with 'c'

    delete text, kidnLung, x; // delete memory of variables whether on stack or heap

    auto whatsThis = "Hey!"; // Infer type with auto
 
    struct Test@ { // Use '@' in a struct definition to automatically typedef its name
        float! score; // Use '!' in a struct field definition to make it required in struct initialization syntax
        string()! grade, subject, name;
    };

    Test classTests[]! = [{.score = 0.64, .grade = "D", .subject = "Math", .name = "Human"}, {.score = 0.86, .grade = "B+", .subject = "History", .name = "Person"}]; 
    // '!' will allocate array on the heap, and its length is also stored
    // JavaScript-like struct initialization syntax 

    // All values are passed-by-reference, or public, by default, unless specified as 'private' in definition, before expression, or in parameter list
    // 'public' in a parameter list will only accept public values for that parameter

    private string() x := "fwrhe3hrh"; // ':=' operator will delete a variable, then reassign it to a value of the specified type (auto is permitted). if the type is not specified, the value must be the type of the variable's original value. This cannot declare variables.

    unix_rev(private string() str) macro = for each (char c do str; int i = strlen(str) - 1; i >= 0; i--) stdio.putchar(c);
    // 'macro' defines a function-like macro, also permits typed parameters. macros can be locally scoped
    // '=' can be used to define one-line functions or macros
    // for-each statement loops over an iterable value

    unix_rev(x);


    return 0;
}

what()