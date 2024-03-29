"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function drop() {
  var menu = document.getElementById('nav-menu');
  var dropbt = document.getElementById('drop-button');

  if (menu.className === 'nav-menu') {
    menu.className += ' nav-drop';
    dropbt.innerHTML = '&#9776;&uarr;';
  } else {
    menu.className = 'nav-menu';
    dropbt.innerHTML = '&#9776;&darr;';
  }
}

var data = {
  aboutMe: ["Analista de Sistemas desde Agosto de 2018, pelo Instituto Federal de Roraima. Comecei trilhar de vez o caminho da informática com foco em desenvolvimento de sistemas em 2011, quando ingressei no curso Técnico em Informártica, também pelo IFRR.", "Desde então tenho me aventurado nesse ambiente vasto e fantástico da TI, com algumas experiências que vão da participação em programa de incentivo ao desenvolvimento tecnológico promovidos pela prefeitura de Boa Vista - RR através da criação de apps voltados à soluções sociais, até criação de jogos na engine Unity3D.", "Atualmente tenho desenvolvido uma paixão enorme por tecnologias com base em JavaScript como NodeJs, ReactJS e React Native. Devido a isso tenho focado os meus estudos nessas tecnologias, porém estou sempre aberto a novos desafios."],
  cv: {
    info: {
      name: "Iam Barroso da Costa",
      status: "Brasileiro, 22 anos, Solteiro"
    },
    langs: ["Português (Nativo)", "Inglês (Conversação)", "Espanhol (Leitura)"],
    techs: {
      web: "HTML, CSS, JavaScript, ReactJS*, NodeJS*",
      mobile: "React Native*",
      db: "MySQL, Postgres, Firebase*"
    },
    objective: "Crescer como desenvolvedor profissional, sempre contribuindo com o sucesso do ambiente no qual eu estiver inserido.",
    titles: ["→ Tecnólogo em Análise e Desenvolvimento de Sistemas. Instituto Federal de Educação, Ciência e Tecnologia de Roraima - IFRR, Campus Boa Vista, conclusão em 2018.", "→ Técnico em Informática com ênfase em Desenvolvimento de Sistemas. Instituto Federal de Educação, Ciência e Tecnologia de Roraima - IFRR, Campus Boa Vista, conclusão em 2015.", "→ Auxiliar Técnico em Eletrônica com ênfase em Robótica Industrial. Serviço Nacional de Aprendizagem Industrial de Roraima - SENAI RR, Unidade Asa Branca, conclusão em 2015."],
    exps: ["→ 2018 - Centro de Ciência, Tecnologia e Inovação de Roraima Cargo: Bolsista Desenvolvedor de Software. Principais atividades: Desenvolvimento Mobile com React Native.", "→ 2017-2018 - Centrais Elétricas do Norte do Brasil S.A. Eletronorte Cargo: Estagiário de TI. Principais atividades: Desenvolvimento Web com JSF; Suporte e manutenção de TI.", "→ 2013-2014 - FIT Manejo Florestal do Brasil LTDA Cargo: Aprendiz. Principais atividades: Suporte e manutenção de TI."],
    events: ["→ Participação na Jungle's Dev Fest 2018 - Manaus, AM", "→ Participação na II Semana de Computação e Informática de Roraima (SECOINFO/RR 2016) - Boa Vista, RR", "→ Participação como Desenvolvedor de Jogos no CONNEPI 2014 - São Luiz, MA"]
  },
  contact: {
    email: "iambarrosodacosta@live.com",
    tel: "+55 95 98400-2013",
    social: {
      fb: "https://www.facebook.com/yannzyto",
      ig: "https://www.instagram.com/yannzyto/",
      tt: "https://twitter.com/yannzyto",
      in: "https://www.linkedin.com/in/iam-barroso/"
    }
  }
};
var app = angular.module('app', []);
app.controller("ctrl", function ($scope) {
  $scope.data = _objectSpread({}, data);
});
