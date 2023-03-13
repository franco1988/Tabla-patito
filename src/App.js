import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [pestana, setPestana] = useState('Chile');
  const [band, setBand] = useState(true);
  const [celularCh, setCelularCh] = useState({
    pais: 'Chile',
    name: '',
    b2b: {
      precioInicial: 0,
      porcentaje: 0,
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    },
    b2c: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    }
  });
  const [tabletCh, setTabletCh] = useState({
    pais: 'Chile',
    name: '',
    b2b: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    },
    b2c: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    }
  });
  const [celularAr, setCelularAr] = useState({
    pais: 'Argentina',
    name: '',
    b2b: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    },
    b2c: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    }
  });
  const [tabletAr, setTabletAr] = useState({
    pais: 'Argentina',
    name: '',
    b2b: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    },
    b2c: {
      precioInicial: '',
      porcentaje: '',
      precioPorMes:{
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0,
      }
    }
  });

  useEffect(() => {
    if(data.length === 0){
      axios.get('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
        .then(res => setData(res.data.response.assumptionData[0]));
    }
  }, []);
 
  useEffect(() => {
    console.log(data)
    if(band && data.length !== 0){
      for (let index = 0; index <  data.productos.length; index++) {
        if(data.productos[index].type === 'producto'){
          setBand(false);
          if(data.productos[index].name === 'tablet'){
            setTabletCh({
              ...tabletCh,
              name: data.productos[index].name
            });
            setTabletAr({
              ...tabletAr,
              name: data.productos[index].name
            });
          };
          if(data.productos[index].name === 'celular'){
            setCelularCh({
              ...celularCh,
              name: data.productos[index].name
            });
            setCelularAr({
              ...celularAr,
              name: data.productos[index].name
            });
          }; 
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleCelularCh = (e, el) => {
    const { name, value } = e.target;
    setCelularCh({
      ...celularCh,
      [el]: {
        ...celularCh[el],
        [name]: value
      } 
    });
  };

  const handleTabletCh = (e, el) => {
    const { name, value } = e.target;
    setTabletCh({
      ...tabletCh,
      [el]: {
        ...tabletCh[el],
        [name]: value
      } 
    });
  };

  const handleCelularAr = (e, el) => {
    const { name, value } = e.target;
    setCelularAr({
      ...celularAr,
      [el]: {
        ...celularAr[el],
        [name]: value
      } 
    });
  };

  const handleTabletAr = (e, el) => {
    const { name, value } = e.target;
    setTabletAr({
      ...tabletAr,
      [el]: {
        ...tabletAr[el],
        [name]: value
      } 
    });
  };

  useEffect(() => {
    let inicial = parseInt(celularCh.b2b.precioInicial);
    let porcentaje = parseInt(celularCh.b2b.porcentaje)
    let aumento = porcentaje * inicial / 100;

    let inicial1 = parseInt(celularCh.b2c.precioInicial);
    let porcentaje1 = parseInt(celularCh.b2c.porcentaje)
    let aumento1 = porcentaje1 * inicial1 / 100;

    celularCh.b2b.precioPorMes.enero = Math.trunc(aumento + inicial);
    celularCh.b2b.precioPorMes.febrero = Math.trunc((celularCh.b2b.precioPorMes.enero * porcentaje / 100) + celularCh.b2b.precioPorMes.enero);
    celularCh.b2b.precioPorMes.marzo = Math.trunc((celularCh.b2b.precioPorMes.febrero * porcentaje / 100) + celularCh.b2b.precioPorMes.febrero);
    celularCh.b2b.precioPorMes.abril = Math.trunc((celularCh.b2b.precioPorMes.marzo * porcentaje / 100) + celularCh.b2b.precioPorMes.marzo);
    celularCh.b2b.precioPorMes.mayo = Math.trunc((celularCh.b2b.precioPorMes.abril * porcentaje / 100) + celularCh.b2b.precioPorMes.abril);
    celularCh.b2b.precioPorMes.junio = Math.trunc((celularCh.b2b.precioPorMes.mayo * porcentaje / 100) + celularCh.b2b.precioPorMes.mayo);
    celularCh.b2b.precioPorMes.julio = Math.trunc((celularCh.b2b.precioPorMes.junio * porcentaje / 100) + celularCh.b2b.precioPorMes.junio);
    celularCh.b2b.precioPorMes.agosto = Math.trunc((celularCh.b2b.precioPorMes.julio * porcentaje / 100) + celularCh.b2b.precioPorMes.julio);
    celularCh.b2b.precioPorMes.septiembre = Math.trunc((celularCh.b2b.precioPorMes.agosto * porcentaje / 100) + celularCh.b2b.precioPorMes.agosto);
    celularCh.b2b.precioPorMes.octubre = Math.trunc((celularCh.b2b.precioPorMes.septiembre * porcentaje / 100) + celularCh.b2b.precioPorMes.septiembre);
    celularCh.b2b.precioPorMes.noviembre = Math.trunc((celularCh.b2b.precioPorMes.octubre * porcentaje / 100) + celularCh.b2b.precioPorMes.octubre);
    celularCh.b2b.precioPorMes.diciembre = Math.trunc((celularCh.b2b.precioPorMes.noviembre * porcentaje / 100) + celularCh.b2b.precioPorMes.noviembre);

    celularCh.b2c.precioPorMes.enero = Math.trunc(aumento1 + inicial1);
    celularCh.b2c.precioPorMes.febrero = Math.trunc((celularCh.b2c.precioPorMes.enero * porcentaje1 / 100) + celularCh.b2c.precioPorMes.enero);
    celularCh.b2c.precioPorMes.marzo = Math.trunc((celularCh.b2c.precioPorMes.febrero * porcentaje1 / 100) + celularCh.b2c.precioPorMes.febrero);
    celularCh.b2c.precioPorMes.abril = Math.trunc((celularCh.b2c.precioPorMes.marzo * porcentaje1 / 100) + celularCh.b2c.precioPorMes.marzo);
    celularCh.b2c.precioPorMes.mayo = Math.trunc((celularCh.b2c.precioPorMes.abril * porcentaje1 / 100) + celularCh.b2c.precioPorMes.abril);
    celularCh.b2c.precioPorMes.junio = Math.trunc((celularCh.b2c.precioPorMes.mayo * porcentaje1 / 100) + celularCh.b2c.precioPorMes.mayo);
    celularCh.b2c.precioPorMes.julio = Math.trunc((celularCh.b2c.precioPorMes.junio * porcentaje1 / 100) + celularCh.b2c.precioPorMes.junio);
    celularCh.b2c.precioPorMes.agosto = Math.trunc((celularCh.b2c.precioPorMes.julio * porcentaje1 / 100) + celularCh.b2c.precioPorMes.julio);
    celularCh.b2c.precioPorMes.septiembre = Math.trunc((celularCh.b2c.precioPorMes.agosto * porcentaje1 / 100) + celularCh.b2c.precioPorMes.agosto);
    celularCh.b2c.precioPorMes.octubre = Math.trunc((celularCh.b2c.precioPorMes.septiembre * porcentaje1 / 100) + celularCh.b2c.precioPorMes.septiembre);
    celularCh.b2c.precioPorMes.noviembre = Math.trunc((celularCh.b2c.precioPorMes.octubre * porcentaje1 / 100) + celularCh.b2c.precioPorMes.octubre);
    celularCh.b2c.precioPorMes.diciembre = Math.trunc((celularCh.b2c.precioPorMes.noviembre * porcentaje1 / 100) + celularCh.b2c.precioPorMes.noviembre);
  }, [celularCh])

  useEffect(() => {
    let inicial = parseInt(celularAr.b2b.precioInicial);
    let porcentaje = parseInt(celularAr.b2b.porcentaje)
    let aumento = porcentaje * inicial / 100;

    let inicial1 = parseInt(celularAr.b2c.precioInicial);
    let porcentaje1 = parseInt(celularAr.b2c.porcentaje)
    let aumento1 = porcentaje1 * inicial1 / 100;

    celularAr.b2b.precioPorMes.enero = Math.trunc(aumento + inicial);
    celularAr.b2b.precioPorMes.febrero = Math.trunc((celularAr.b2b.precioPorMes.enero * porcentaje / 100) + celularAr.b2b.precioPorMes.enero);
    celularAr.b2b.precioPorMes.marzo = Math.trunc((celularAr.b2b.precioPorMes.febrero * porcentaje / 100) + celularAr.b2b.precioPorMes.febrero);
    celularAr.b2b.precioPorMes.abril = Math.trunc((celularAr.b2b.precioPorMes.marzo * porcentaje / 100) + celularAr.b2b.precioPorMes.marzo);
    celularAr.b2b.precioPorMes.mayo = Math.trunc((celularAr.b2b.precioPorMes.abril * porcentaje / 100) + celularAr.b2b.precioPorMes.abril);
    celularAr.b2b.precioPorMes.junio = Math.trunc((celularAr.b2b.precioPorMes.mayo * porcentaje / 100) + celularAr.b2b.precioPorMes.mayo);
    celularAr.b2b.precioPorMes.julio = Math.trunc((celularAr.b2b.precioPorMes.junio * porcentaje / 100) + celularAr.b2b.precioPorMes.junio);
    celularAr.b2b.precioPorMes.agosto = Math.trunc((celularAr.b2b.precioPorMes.julio * porcentaje / 100) + celularAr.b2b.precioPorMes.julio);
    celularAr.b2b.precioPorMes.septiembre = Math.trunc((celularAr.b2b.precioPorMes.agosto * porcentaje / 100) + celularAr.b2b.precioPorMes.agosto);
    celularAr.b2b.precioPorMes.octubre = Math.trunc((celularAr.b2b.precioPorMes.septiembre * porcentaje / 100) + celularAr.b2b.precioPorMes.septiembre);
    celularAr.b2b.precioPorMes.noviembre = Math.trunc((celularAr.b2b.precioPorMes.octubre * porcentaje / 100) + celularAr.b2b.precioPorMes.octubre);
    celularAr.b2b.precioPorMes.diciembre = Math.trunc((celularAr.b2b.precioPorMes.noviembre * porcentaje / 100) + celularAr.b2b.precioPorMes.noviembre);

    celularAr.b2c.precioPorMes.enero = Math.trunc(aumento1 + inicial1);
    celularAr.b2c.precioPorMes.febrero = Math.trunc((celularAr.b2c.precioPorMes.enero * porcentaje1 / 100) + celularAr.b2c.precioPorMes.enero);
    celularAr.b2c.precioPorMes.marzo = Math.trunc((celularAr.b2c.precioPorMes.febrero * porcentaje1 / 100) + celularAr.b2c.precioPorMes.febrero);
    celularAr.b2c.precioPorMes.abril = Math.trunc((celularAr.b2c.precioPorMes.marzo * porcentaje1 / 100) + celularAr.b2c.precioPorMes.marzo);
    celularAr.b2c.precioPorMes.mayo = Math.trunc((celularAr.b2c.precioPorMes.abril * porcentaje1 / 100) + celularAr.b2c.precioPorMes.abril);
    celularAr.b2c.precioPorMes.junio = Math.trunc((celularAr.b2c.precioPorMes.mayo * porcentaje1 / 100) + celularAr.b2c.precioPorMes.mayo);
    celularAr.b2c.precioPorMes.julio = Math.trunc((celularAr.b2c.precioPorMes.junio * porcentaje1 / 100) + celularAr.b2c.precioPorMes.junio);
    celularAr.b2c.precioPorMes.agosto = Math.trunc((celularAr.b2c.precioPorMes.julio * porcentaje1 / 100) + celularAr.b2c.precioPorMes.julio);
    celularAr.b2c.precioPorMes.septiembre = Math.trunc((celularAr.b2c.precioPorMes.agosto * porcentaje1 / 100) + celularAr.b2c.precioPorMes.agosto);
    celularAr.b2c.precioPorMes.octubre = Math.trunc((celularAr.b2c.precioPorMes.septiembre * porcentaje1 / 100) + celularAr.b2c.precioPorMes.septiembre);
    celularAr.b2c.precioPorMes.noviembre = Math.trunc((celularAr.b2c.precioPorMes.octubre * porcentaje1 / 100) + celularAr.b2c.precioPorMes.octubre);
    celularAr.b2c.precioPorMes.diciembre = Math.trunc((celularAr.b2c.precioPorMes.noviembre * porcentaje1 / 100) + celularAr.b2c.precioPorMes.noviembre);
  }, [celularAr])

  useEffect(() => {
    let inicial = parseInt(tabletAr.b2b.precioInicial);
    let porcentaje = parseInt(tabletAr.b2b.porcentaje)
    let aumento = porcentaje * inicial / 100;

    let inicial1 = parseInt(tabletAr.b2c.precioInicial);
    let porcentaje1 = parseInt(tabletAr.b2c.porcentaje)
    let aumento1 = porcentaje1 * inicial1 / 100;

    tabletAr.b2b.precioPorMes.enero = Math.trunc(aumento + inicial);
    tabletAr.b2b.precioPorMes.febrero = Math.trunc((tabletAr.b2b.precioPorMes.enero * porcentaje / 100) + tabletAr.b2b.precioPorMes.enero);
    tabletAr.b2b.precioPorMes.marzo = Math.trunc((tabletAr.b2b.precioPorMes.febrero * porcentaje / 100) + tabletAr.b2b.precioPorMes.febrero);
    tabletAr.b2b.precioPorMes.abril = Math.trunc((tabletAr.b2b.precioPorMes.marzo * porcentaje / 100) + tabletAr.b2b.precioPorMes.marzo);
    tabletAr.b2b.precioPorMes.mayo = Math.trunc((tabletAr.b2b.precioPorMes.abril * porcentaje / 100) + tabletAr.b2b.precioPorMes.abril);
    tabletAr.b2b.precioPorMes.junio = Math.trunc((tabletAr.b2b.precioPorMes.mayo * porcentaje / 100) + tabletAr.b2b.precioPorMes.mayo);
    tabletAr.b2b.precioPorMes.julio = Math.trunc((tabletAr.b2b.precioPorMes.junio * porcentaje / 100) + tabletAr.b2b.precioPorMes.junio);
    tabletAr.b2b.precioPorMes.agosto = Math.trunc((tabletAr.b2b.precioPorMes.julio * porcentaje / 100) + tabletAr.b2b.precioPorMes.julio);
    tabletAr.b2b.precioPorMes.septiembre = Math.trunc((tabletAr.b2b.precioPorMes.agosto * porcentaje / 100) + tabletAr.b2b.precioPorMes.agosto);
    tabletAr.b2b.precioPorMes.octubre = Math.trunc((tabletAr.b2b.precioPorMes.septiembre * porcentaje / 100) + tabletAr.b2b.precioPorMes.septiembre);
    tabletAr.b2b.precioPorMes.noviembre = Math.trunc((tabletAr.b2b.precioPorMes.octubre * porcentaje / 100) + tabletAr.b2b.precioPorMes.octubre);
    tabletAr.b2b.precioPorMes.diciembre = Math.trunc((tabletAr.b2b.precioPorMes.noviembre * porcentaje / 100) + tabletAr.b2b.precioPorMes.noviembre);

    tabletAr.b2c.precioPorMes.enero = Math.trunc(aumento1 + inicial1);
    tabletAr.b2c.precioPorMes.febrero = Math.trunc((tabletAr.b2c.precioPorMes.enero * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.enero);
    tabletAr.b2c.precioPorMes.marzo = Math.trunc((tabletAr.b2c.precioPorMes.febrero * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.febrero);
    tabletAr.b2c.precioPorMes.abril = Math.trunc((tabletAr.b2c.precioPorMes.marzo * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.marzo);
    tabletAr.b2c.precioPorMes.mayo = Math.trunc((tabletAr.b2c.precioPorMes.abril * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.abril);
    tabletAr.b2c.precioPorMes.junio = Math.trunc((tabletAr.b2c.precioPorMes.mayo * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.mayo);
    tabletAr.b2c.precioPorMes.julio = Math.trunc((tabletAr.b2c.precioPorMes.junio * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.junio);
    tabletAr.b2c.precioPorMes.agosto = Math.trunc((tabletAr.b2c.precioPorMes.julio * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.julio);
    tabletAr.b2c.precioPorMes.septiembre = Math.trunc((tabletAr.b2c.precioPorMes.agosto * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.agosto);
    tabletAr.b2c.precioPorMes.octubre = Math.trunc((tabletAr.b2c.precioPorMes.septiembre * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.septiembre);
    tabletAr.b2c.precioPorMes.noviembre = Math.trunc((tabletAr.b2c.precioPorMes.octubre * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.octubre);
    tabletAr.b2c.precioPorMes.diciembre = Math.trunc((tabletAr.b2c.precioPorMes.noviembre * porcentaje1 / 100) + tabletAr.b2c.precioPorMes.noviembre);
  }, [tabletAr])

  useEffect(() => {
    let inicial = parseInt(tabletCh.b2b.precioInicial);
    let porcentaje = parseInt(tabletCh.b2b.porcentaje)
    let aumento = porcentaje * inicial / 100;

    let inicial1 = parseInt(tabletCh.b2c.precioInicial);
    let porcentaje1 = parseInt(tabletCh.b2c.porcentaje)
    let aumento1 = porcentaje1 * inicial1 / 100;

    tabletCh.b2b.precioPorMes.enero = Math.trunc(aumento + inicial);
    tabletCh.b2b.precioPorMes.febrero = Math.trunc((tabletCh.b2b.precioPorMes.enero * porcentaje / 100) + tabletCh.b2b.precioPorMes.enero);
    tabletCh.b2b.precioPorMes.marzo = Math.trunc((tabletCh.b2b.precioPorMes.febrero * porcentaje / 100) + tabletCh.b2b.precioPorMes.febrero);
    tabletCh.b2b.precioPorMes.abril = Math.trunc((tabletCh.b2b.precioPorMes.marzo * porcentaje / 100) + tabletCh.b2b.precioPorMes.marzo);
    tabletCh.b2b.precioPorMes.mayo = Math.trunc((tabletCh.b2b.precioPorMes.abril * porcentaje / 100) + tabletCh.b2b.precioPorMes.abril);
    tabletCh.b2b.precioPorMes.junio = Math.trunc((tabletCh.b2b.precioPorMes.mayo * porcentaje / 100) + tabletCh.b2b.precioPorMes.mayo);
    tabletCh.b2b.precioPorMes.julio = Math.trunc((tabletCh.b2b.precioPorMes.junio * porcentaje / 100) + tabletCh.b2b.precioPorMes.junio);
    tabletCh.b2b.precioPorMes.agosto = Math.trunc((tabletCh.b2b.precioPorMes.julio * porcentaje / 100) + tabletCh.b2b.precioPorMes.julio);
    tabletCh.b2b.precioPorMes.septiembre = Math.trunc((tabletCh.b2b.precioPorMes.agosto * porcentaje / 100) + tabletCh.b2b.precioPorMes.agosto);
    tabletCh.b2b.precioPorMes.octubre = Math.trunc((tabletCh.b2b.precioPorMes.septiembre * porcentaje / 100) + tabletCh.b2b.precioPorMes.septiembre);
    tabletCh.b2b.precioPorMes.noviembre = Math.trunc((tabletCh.b2b.precioPorMes.octubre * porcentaje / 100) + tabletCh.b2b.precioPorMes.octubre);
    tabletCh.b2b.precioPorMes.diciembre = Math.trunc((tabletCh.b2b.precioPorMes.noviembre * porcentaje / 100) + tabletCh.b2b.precioPorMes.noviembre);

    tabletCh.b2c.precioPorMes.enero = Math.trunc(aumento1 + inicial1);
    tabletCh.b2c.precioPorMes.febrero = Math.trunc((tabletCh.b2c.precioPorMes.enero * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.enero);
    tabletCh.b2c.precioPorMes.marzo = Math.trunc((tabletCh.b2c.precioPorMes.febrero * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.febrero);
    tabletCh.b2c.precioPorMes.abril = Math.trunc((tabletCh.b2c.precioPorMes.marzo * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.marzo);
    tabletCh.b2c.precioPorMes.mayo = Math.trunc((tabletCh.b2c.precioPorMes.abril * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.abril);
    tabletCh.b2c.precioPorMes.junio = Math.trunc((tabletCh.b2c.precioPorMes.mayo * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.mayo);
    tabletCh.b2c.precioPorMes.julio = Math.trunc((tabletCh.b2c.precioPorMes.junio * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.junio);
    tabletCh.b2c.precioPorMes.agosto = Math.trunc((tabletCh.b2c.precioPorMes.julio * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.julio);
    tabletCh.b2c.precioPorMes.septiembre = Math.trunc((tabletCh.b2c.precioPorMes.agosto * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.agosto);
    tabletCh.b2c.precioPorMes.octubre = Math.trunc((tabletCh.b2c.precioPorMes.septiembre * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.septiembre);
    tabletCh.b2c.precioPorMes.noviembre = Math.trunc((tabletCh.b2c.precioPorMes.octubre * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.octubre);
    tabletCh.b2c.precioPorMes.diciembre = Math.trunc((tabletCh.b2c.precioPorMes.noviembre * porcentaje1 / 100) + tabletCh.b2c.precioPorMes.noviembre);
  }, [tabletCh])

  const handleCargar = () => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('Datos Cargados en el Formulario: ')
    console.log('Chile.........')
    console.log(celularCh)
    console.log(tabletCh)
    console.log('Argentina.........')
    console.log(celularAr)
    console.log(tabletAr)
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  }

  return (
    <>
      <Box>
        <Grid item xs={12}>
          <Typography>Carga de productos / servicios</Typography>
        </Grid>
        <Grid item xs={12}>
          <button onClick={() => setPestana('Chile')}>Chile</button>
          <button onClick={() => setPestana('Argentina')}>Argentina</button>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography>b2b</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>
                  <Typography>Año 1</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Grid container spacing={0}>
                    <Grid item xs={1}>Enero</Grid>
                    <Grid item xs={1}>Febrero</Grid>
                    <Grid item xs={1}>Marzo</Grid>
                    <Grid item xs={1}>Abril</Grid>
                    <Grid item xs={1}>Mayo</Grid>
                    <Grid item xs={1}>Junio</Grid>
                    <Grid item xs={1}>Julio</Grid>
                    <Grid item xs={1}>Agosto</Grid>
                    <Grid item xs={1}>Septiembre</Grid>
                    <Grid item xs={1}>Octubre</Grid>
                    <Grid item xs={1}>Noviembre</Grid>
                    <Grid item xs={1}>Diciembre</Grid>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            
             {
              pestana === 'Chile' && 
                <>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{celularCh.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={celularCh.b2b.precioInicial} name='precioInicial' onChange={(e) => handleCelularCh(e, 'b2b')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${celularCh.b2b.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={celularCh.b2b.porcentaje} name='porcentaje' onChange={(e) => handleCelularCh(e, 'b2b')}></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{tabletCh.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={tabletCh.b2b.precioInicial} name='precioInicial' onChange={(e) => handleTabletCh(e, 'b2b')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2b.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={tabletCh.b2b.porcentaje} name='porcentaje' onChange={(e) => handleTabletCh(e, 'b2b')}></TextField>
                    </Grid>
                  </Grid>
                </>
             }

            {
              pestana === 'Argentina' && 
              <>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>1</Grid>
                          <Grid item xs={7}>{celularAr.name}</Grid>
                          <Grid item xs={4}>
                            <TextField value={celularAr.b2b.precioInicial} name='precioInicial' onChange={(e) => handleCelularAr(e, 'b2b')}></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={10}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.enero}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.febrero}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.marzo}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.abril}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.mayo}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.junio}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.julio}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.agosto}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.septiembre}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.octubre}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.noviembre}</Grid>
                          <Grid item xs={1}>${celularAr.b2b.precioPorMes.diciembre}</Grid>  
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField value={celularAr.b2b.porcentaje} name='porcentaje' onChange={(e) => handleCelularAr(e, 'b2b')}></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>1</Grid>
                          <Grid item xs={7}>{tabletAr.name}</Grid>
                          <Grid item xs={4}>
                            <TextField value={tabletAr.b2b.precioInicial} name='precioInicial' onChange={(e) => handleTabletAr(e, 'b2b')}></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={10}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.enero}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.febrero}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.marzo}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.abril}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.mayo}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.junio}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.julio}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.agosto}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.septiembre}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.octubre}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.noviembre}</Grid>
                          <Grid item xs={1}>${tabletAr.b2b.precioPorMes.diciembre}</Grid>  
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField value={tabletAr.b2b.porcentaje} name='porcentaje' onChange={(e) => handleTabletAr(e, 'b2b')}></TextField>
                  </Grid>
                </Grid>
              </>
            }

             
          </Grid>


          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography>b2c</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>
                  <Typography>Año 1</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Grid container spacing={0}>
                    <Grid item xs={1}>Enero</Grid>
                    <Grid item xs={1}>Febrero</Grid>
                    <Grid item xs={1}>Marzo</Grid>
                    <Grid item xs={1}>Abril</Grid>
                    <Grid item xs={1}>Mayo</Grid>
                    <Grid item xs={1}>Junio</Grid>
                    <Grid item xs={1}>Julio</Grid>
                    <Grid item xs={1}>Agosto</Grid>
                    <Grid item xs={1}>Septiembre</Grid>
                    <Grid item xs={1}>Octubre</Grid>
                    <Grid item xs={1}>Noviembre</Grid>
                    <Grid item xs={1}>Diciembre</Grid>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {
              pestana === 'Chile' &&
                <>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{celularCh.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={celularCh.b2c.precioInicial} name='precioInicial' onChange={(e) => handleCelularCh(e, 'b2c')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${celularCh.b2c.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={celularCh.b2c.porcentaje} name='porcentaje' onChange={(e) => handleCelularCh(e, 'b2c')}></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{tabletCh.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={tabletCh.b2c.precioInicial} name='precioInicial' onChange={(e) => handleTabletCh(e, 'b2c')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${tabletCh.b2c.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={tabletCh.b2c.porcentaje} name='porcentaje' onChange={(e) => handleTabletCh(e, 'b2c')}></TextField>
                    </Grid>
                  </Grid>
                </>
            }

            {
              pestana === 'Argentina' &&
                <>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{celularAr.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={celularAr.b2c.precioInicial} name='precioInicial' onChange={(e) => handleCelularAr(e, 'b2c')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${celularAr.b2c.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={celularAr.b2c.porcentaje} name='porcentaje' onChange={(e) => handleCelularAr(e, 'b2c')}></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>1</Grid>
                            <Grid item xs={7}>{tabletAr.name}</Grid>
                            <Grid item xs={4}>
                              <TextField value={tabletAr.b2c.precioInicial} name='precioInicial' onChange={(e) => handleTabletAr(e, 'b2c')}></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container spacing={0}>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.enero}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.febrero}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.marzo}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.abril}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.mayo}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.junio}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.julio}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.agosto}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.septiembre}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.octubre}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.noviembre}</Grid>
                            <Grid item xs={1}>${tabletAr.b2c.precioPorMes.diciembre}</Grid>  
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField value={tabletAr.b2c.porcentaje} name='porcentaje' onChange={(e) => handleTabletAr(e, 'b2c')}></TextField>
                    </Grid>
                  </Grid>
                </>
            }
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <button onClick={() => handleCargar()}>Cargar Datos</button>
        </Grid>
      </Box>
    </>
  );
}

export default App;
