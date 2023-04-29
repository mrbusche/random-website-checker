import org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.1.0-RC1"
    id("io.spring.dependency-management") version "1.1.0"
    id("org.sonarqube") version "4.0.0.2929"
    id("org.jetbrains.kotlin.jvm") version "1.8.21"
}

group = "com.ankeny-new-development"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
    maven { url = uri("https://repo.spring.io/milestone") }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    implementation("com.google.code.gson:gson")
    implementation("org.jsoup:jsoup:1.16.1")
}

tasks.withType<Test> {
    useJUnitPlatform()
    testLogging {
        exceptionFormat = FULL
    }
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = JavaVersion.VERSION_17.toString()
    }
}
