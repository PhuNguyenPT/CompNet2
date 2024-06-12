package com.example.jpa;

import com.example.jpa.author.AuthorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			AuthorRepository authorRepository
	) {
//		return args -> {
//			var video = Video.builder()
//					.name("abc")
//					.length(6)
//					.build();
//			videoRepository.save(video);
//		};
		return args -> {
//			Faker faker = new Faker();
//			for (int i = 0; i < 50; i++) {
//				String fn = faker.name().firstName();
//				String ln = faker.name().lastName();
//				var author = Author.builder()
//						.firstName(fn)
//						.lastName(ln)
//						.age(faker.number().numberBetween(19, 50))
//						.email(fn.toLowerCase()+"."+ln.toLowerCase()+"@gmail.com")
//						.baseEntity(
//								new BaseEntity(
//										ZonedDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh")),
//										ZonedDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh")),
//										"michael",
//										"michael"
//								)
//						)
//						.build();
//				authorRepository.save(author);
//			}
		};
	}
}
