import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

function App() {
  
  const [data, setData] = useState([]);
  const [pestana, setPestana] = useState('Chile');
  const [band, setBand] = useState(true);
  const [chile, setChile] = useState({
    pais: 'Chile',
    productos: [],
  });

  const [argentina, setArgentina] = useState({
    pais: 'Argentina',
    productos: [],
  });

  useEffect(() => {
    if(data.length === 0){
      axios.get('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67')
        .then(res => setData(res.data.response.assumptionData[0]));
    }
  }, []);

 
  useEffect(() => {
    console.log(' data :', data)
    if(band && data.length !== 0){
      console.log(' entro :', data.productos.length)
      for (let index = 0; index <  data.productos.length; index++) {
        console.log(' for :')
        if(data.productos[index].type === 'producto'){
          setBand(false);
          chile.productos.push({
            name: data.productos[index].name,
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
          });
          argentina.productos.push({
            name: data.productos[index].name,
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
          });
        }
      }
    }
  }, [data]);

  console.log(' argentina :', argentina)
  console.log(' chile :', chile)

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    /*setArticulos({
      ...articulos,
      [name]: {
        ...articulos[name],
        value,
      },
    });*/
  };

  const handlePrecioInicial = (e, index) => {
    const { name, value } = e.target;
    if(name === 'chile'){
      chile.productos[index].precioInicial = value;
    }
    if(name === 'argentina'){
      argentina.productos[index].precioInicial = value;
    }
  };

  return (
    <>
      <Box>
        <Grid item xs={12}>
          <Typography>Carga de productos / servicios</Typography>
        </Grid>
        <Grid item xs={12}>
          <button onClick={() => setPestana('chile')}>Chile</button>
          <button onClick={() => setPestana('argentina')}>Argentina</button>
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
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>
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
              (chile.productos.length !== 0) && (pestana === 'Chile') && chile.productos.map((ele, index) => (
                <Grid container spacing={0} key={index}>
                  <Grid item xs={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>{index + 1}</Grid>
                          <Grid item xs={7}>{ele.name}</Grid>
                          <Grid item xs={4}>
                            <TextField value={chile.productos.precioInicial} name='chile' onChange={(e) => handlePrecioInicial(e, index)}></TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={10}>
                        <Grid container spacing={0}>
                          <Grid item xs={1}>
                            <TextField>${ele.precioPorMes.enero}</TextField>
                          </Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>
                          <Grid item xs={1}>$</Grid>  
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                  <TextField value='0' name='porcentaje'></TextField>
                  </Grid>
                </Grid>
              ))
            }
             
          </Grid>
        </Grid>

        {
          /*
          <Grid>
            Tabla B2C
          </Grid>*/
        }

      </Box>
    </>
  );
}

export default App;
