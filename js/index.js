const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

const numPacientes = pacientes.length;

const mayoresEdad = pacientes.filter(
  (paciente) => paciente.paciente.edad >= 18
).length;

const pacientesDiabetes = pacientes.filter(
  (paciente) => paciente.paciente.sexo === "H" && paciente.dieta === "Diabetes"
).length;

const sumaTotalDias = pacientes.reduce(
  (acumulador, paciente) => acumulador + paciente.diasIngresado,
  0
);

const mujeresPacientes = pacientes.filter(
  (paciente) => paciente.paciente.sexo === "M"
);

const edadMediaMujeres = pacientes
  .filter((paciente) => paciente.paciente.sexo === "M")
  .reduce((acumulador, paciente) => acumulador + paciente.paciente.edad, 0);

const datosPacientes = {
  nPacientes: numPacientes,
  nMayoresEdad: mayoresEdad,
  nHombresDiabeticos: pacientesDiabetes,
  totalDiasIngreso: sumaTotalDias,
  mediaEdadMujeres: edadMediaMujeres,
};

console.log(datosPacientes);
