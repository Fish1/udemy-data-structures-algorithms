
mystring = "Hi My name is Andrei"

def reverseString(string):
    if isinstance(string, str) == False:
        return None
    result = ""
    for letter in string:
        result = letter + result;
    return result

myresult = reverseString(mystring)
# myresult = reverseString(1)

print(myresult)