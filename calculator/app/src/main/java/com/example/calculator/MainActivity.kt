package com.example.calculator

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.calculator.ui.theme.CalculatorTheme
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Greeting()
        }
    }
}

fun setUserInputNumber(userInput: UserInput, input: Int): UserInput {
    var a = userInput.a
    var b = userInput.b
    val operator =  userInput.operator

    if (userInput.calculate && a != null && b != null) {
        return UserInput(a = input, b = null, operator = " ", calculate = false)
    }
    else if (a == null) {
        a = input
    }
    else if (operator == " ") {
        a = a * 10 + input
    }
    else if (b == null){
        b = input
    }
    else {
        b = b * 10 + input
    }
    return UserInput(a = a, b = b, operator = operator, calculate = false)
}

fun setUserInputOperator(userInput: UserInput, input: String): UserInput {
    val a = userInput.a
    val b = userInput.b
    val operator =  userInput.operator
    println(userInput)
    if (userInput.calculate && a != null && b != null) {
        val newA = doMathOperation(a,b,operator).toInt()
        return UserInput(a = newA, b = null, operator = input, calculate = false)
    }
    if (a != null && b == null) {
        println(1)
        return UserInput(a = a, operator = input, b = b, calculate = false)
    }
    if (input == "=") {
        println(2)
        return UserInput(a = a, operator = operator, b = b, calculate = true)
    }
    println(3)
    return UserInput(a = a, operator = operator, b = b, calculate = false)
}

fun getOutput(userInput: UserInput): String {
    var a: String = userInput.a.toString()
    var b: String = userInput.b.toString()
    val operator: String = userInput.operator
    val calculate: Boolean = userInput.calculate

    if (a == "null"){
        a = " "
    }
    if (b == "null"){
        b = " "
    }

    var calculatedResult = " "
    if (calculate){
        calculatedResult = " = ${doMathOperation(a.toInt(), b.toInt(), operator)}"
    }
    println(userInput)
    return "$a $operator $b $calculatedResult"
}

fun doMathOperation(a: Int, b: Int, operation: String): String {
    var result: Number? = null

    when(operation) {
        "+" -> result = a + b
        "-" -> result = a - b
        "X" -> result = a * b
        "/" -> result = a / b
    }

    return result.toString()
}

data class UserInput(var a: Int?, var operator: String, var b: Int?, var calculate: Boolean)

@Composable
fun Greeting() {
    var userInput by remember { mutableStateOf(UserInput(a = null, operator = " ", b = null, calculate = false)) }

    Column {

        for (i in 0..2){
                Row {
                    for (j in 1..3) {
                        val declaredNumber = 3 * i + j
                        OutlinedButton(onClick = {
                            userInput = setUserInputNumber(userInput, declaredNumber)
                            println(userInput)
                            
                        }) {
                            Text(text = declaredNumber.toString())
                        }
                    }
                }
        }
        val operations = listOf("+", "-", "X", "/", "=")

        Row {
            for (operation in operations) {
                OutlinedButton(onClick = { userInput = setUserInputOperator(userInput = userInput, input = operation) }) {
                    Text(text = operation)
                }
            }
        }

        Row {
            Text(text = getOutput(userInput))
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    CalculatorTheme {
        Greeting()
    }
}