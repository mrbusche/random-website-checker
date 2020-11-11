package com.webpage.checker

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class CheckerApplication

fun main(args: Array<String>) {
    runApplication<CheckerApplication>(*args)
}
