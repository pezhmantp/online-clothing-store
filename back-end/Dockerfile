FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /OCS/back-end
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /OCS/back-end
COPY . .
COPY --from=builder ./OCS/back-end/target/*.jar online-store-1.jar
ENTRYPOINT ["java", "-jar", "online-store-1.jar"]