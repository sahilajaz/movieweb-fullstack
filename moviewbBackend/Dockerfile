FROM openjdk:22
EXPOSE 8080
ADD  target/movies-application.jar movies-application.jar
ENTRYPOINT ["java" , "-jar"     , "/movies-application.jar"]