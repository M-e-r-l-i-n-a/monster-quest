package com.monsterquest.backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		// Lädt die .env Datei aus dem Root-Verzeichnis
		Dotenv dotenv = Dotenv.configure()
				.directory("..")
				.ignoreIfMissing()
				.load();

		// Macht die Variablen für Spring verfügbar
		dotenv.entries().forEach(entry ->
				System.setProperty(entry.getKey(), entry.getValue())
		);

		SpringApplication.run(BackendApplication.class, args);
	}

}
