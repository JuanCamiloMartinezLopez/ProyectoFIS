-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OnGymDB` DEFAULT CHARACTER SET utf8 ;
USE `OnGymDB` ;

-- -----------------------------------------------------
-- Table `mydb`.`Entrenador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnGymDB`.`Entrenador` (
  `idEntrenador` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombres` VARCHAR(15) NOT NULL,
  `primerapellido` VARCHAR(10) NOT NULL,
  `segundoapellido` VARCHAR(10) NULL,
  `correo` VARCHAR(25) NOT NULL,
  `contraseña` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idEntrenador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Deportista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnGymDB`.`Deportista` (
  `idDeportista` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombres` VARCHAR(15) NOT NULL,
  `primerapellido` VARCHAR(10) NOT NULL,
  `segundoapellido` VARCHAR(10) NULL,
  `correo` VARCHAR(25) NOT NULL,
  `contraseña` VARCHAR(10) NOT NULL,
  `direccion` VARCHAR(20) NULL,
  `telefono` INT NULL,
  `peso` INT NULL,
  `estatura` INT NULL,
  `idEntrenadorD` INT UNSIGNED NULL,
  PRIMARY KEY (`idDeportista`),
  INDEX `idEntrenadorD` (`idEntrenadorD` ASC) VISIBLE,
  CONSTRAINT `idEntrenadorD`
    FOREIGN KEY (`idEntrenadorD`)
    REFERENCES `OnGymDB`.`Entrenador` (`idEntrenador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Rutinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnGymDB`.`Rutinas` (
  `idRutinas` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `repeticiones` INT NOT NULL,
  `series` INT NOT NULL,
  `precio` INT NOT NULL,
  `idEntrenadorR` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idRutinas`),
  INDEX `idEntrenadorR` (`idEntrenadorR` ASC) VISIBLE,
  CONSTRAINT `idEntrenadorR`
    FOREIGN KEY (`idEntrenadorR`)
    REFERENCES `OnGymDB`.`Entrenador` (`idEntrenador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ejercicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OnGymDB`.`Ejercicios` (
  `idEjercicios` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombre` VARCHAR(10) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `idRutinas` INT UNSIGNED NULL,
  PRIMARY KEY (`idEjercicios`),
  INDEX `idRutinas_idx` (`idRutinas` ASC) VISIBLE,
  CONSTRAINT `idRutinas`
    FOREIGN KEY (`idRutinas`)
    REFERENCES `OnGymDB`.`Rutinas` (`idRutinas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;