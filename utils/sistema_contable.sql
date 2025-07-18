CREATE DATABASE IF NOT EXISTS sistema_contable;
USE sistema_contable;

-- Primero tablas sin dependencias
CREATE TABLE IF NOT EXISTS plan_cuentas (
  id_cuenta INT PRIMARY KEY AUTO_INCREMENT,
  cod_rubro VARCHAR(50),
  rubro VARCHAR(100),
  cod_subrubro VARCHAR(50),
  subrubro VARCHAR(100),
  cuenta VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS empresas (
  id_empresa INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  descripcion TEXT
);

CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_empresa INT,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  contrasena VARCHAR(100),
  rol TINYINT,
  empresa VARCHAR(100),
  FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa)
);

-- Ahora que usuarios existe, agregamos el gerente a empresas
ALTER TABLE empresas ADD COLUMN id_gerente INT;
ALTER TABLE empresas ADD CONSTRAINT fk_gerente FOREIGN KEY (id_gerente) REFERENCES usuarios(id);

CREATE TABLE IF NOT EXISTS transacciones (
  id_transaccion INT PRIMARY KEY AUTO_INCREMENT,
  tipo ENUM('ingreso', 'egreso'),
  doc_respaldatorio VARCHAR(100),
  fecha DATE,
  contacto VARCHAR(100),
  importe DECIMAL(12,2),
  condicion VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS asientos_diarios (
  id_asiento INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE,
  num_asiento INT,
  doc_respaldatorio VARCHAR(100),
  datos_adjuntos TEXT,
  id_usuario INT,
  leyenda TEXT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS detalle_asiento (
  id_detalle INT PRIMARY KEY AUTO_INCREMENT,
  id_asiento INT,
  id_cuenta INT,
  tipo ENUM('debe', 'haber'),
  importe DECIMAL(12,2),
  FOREIGN KEY (id_asiento) REFERENCES asientos_diarios(id_asiento),
  FOREIGN KEY (id_cuenta) REFERENCES plan_cuentas(id_cuenta)
);

CREATE TABLE IF NOT EXISTS mayor_cuentas (
  id_mayor INT PRIMARY KEY AUTO_INCREMENT,
  id_cuenta INT,
  fecha DATE,
  num_asiento INT,
  debe DECIMAL(12,2),
  haber DECIMAL(12,2),
  saldo DECIMAL(12,2),
  FOREIGN KEY (id_cuenta) REFERENCES plan_cuentas(id_cuenta)
);

CREATE TABLE IF NOT EXISTS estado_situacion_patrimonial (
  id_estado INT PRIMARY KEY AUTO_INCREMENT,
  cod_rubro VARCHAR(50),
  rubro VARCHAR(100),
  cod_subrubro VARCHAR(50),
  subrubro VARCHAR(100),
  importe DECIMAL(12,2)
);

CREATE TABLE IF NOT EXISTS estado_resultados (
  id_resultado INT PRIMARY KEY AUTO_INCREMENT,
  cod_rubro VARCHAR(50),
  rubro VARCHAR(100),
  cod_subrubro VARCHAR(50),
  subrubro VARCHAR(100),
  cuenta VARCHAR(100),
  saldo DECIMAL(12,2)
);

CREATE TABLE IF NOT EXISTS estado_fondos (
  id_fondo INT PRIMARY KEY AUTO_INCREMENT,
  cod_rubro VARCHAR(50),
  rubro VARCHAR(100),
  cod_subrubro VARCHAR(50),
  subrubro VARCHAR(100),
  cuenta VARCHAR(100),
  importe DECIMAL(12,2)
);

CREATE TABLE IF NOT EXISTS analisis_indices (
  id_indice INT PRIMARY KEY AUTO_INCREMENT,
  activos_corrientes DECIMAL(12,2),
  pasivos_corrientes DECIMAL(12,2),
  indice_de_liquidez DECIMAL(12,4),
  saldos_activos DECIMAL(12,2),
  saldos_pasivos DECIMAL(12,2),
  indice_de_solvencia DECIMAL(12,4),
  saldo_de_pasivo DECIMAL(12,2),
  saldo_pn DECIMAL(12,2),
  indice_de_endeudamiento DECIMAL(12,4),
  costo_mercancias_vendidas DECIMAL(12,2),
  ventas DECIMAL(12,2),
  indice_costo_ventas DECIMAL(12,4),
  utilidad_del_ejercicio DECIMAL(12,2),
  patrimonio_neto DECIMAL(12,2),
  indice_retorno_inversion DECIMAL(12,4)
);
