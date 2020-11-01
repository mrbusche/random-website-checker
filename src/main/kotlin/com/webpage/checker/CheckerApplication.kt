package com.webpage.checker

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CheckerApplication

fun main(args: Array<String>) {
    runApplication<CheckerApplication>(*args)
}
