export const metrics = [
  {
    title: "Vendas",
    value: "R$ 84.250,00",
    variation: "+12,5%",
    description: "vs. período anterior",
  },
  {
    title: "Pedidos",
    value: "126",
    variation: "+8,6%",
    description: "vs. período anterior",
  },
  {
    title: "Clientes",
    value: "1.842",
    variation: "+5,2%",
    description: "vs. período anterior",
  },
  {
    title: "Conversão",
    value: "2,84%",
    variation: "+0,34 p.p.",
    description: "vs. período anterior",
  },
];

export const salesData = [
  { date: "01/09", sales: 8200 },
  { date: "02/09", sales: 10400 },
  { date: "03/09", sales: 7800 },
  { date: "04/09", sales: 12600 },
  { date: "05/09", sales: 9800 },
  { date: "06/09", sales: 14300 },
  { date: "07/09", sales: 11200 },
];

export const chartConfig = {
  sales: {
    label: "Vendas",
  },
};

export const periodOptions = [
  { value: "today", label: "Hoje" },
  { value: "7d", label: "Últimos 7 dias" },
  { value: "30d", label: "Últimos 30 dias" },
  { value: "month", label: "Este mês" },
];

export const salesDataByPeriod = {
  today: [
    { date: "Hoje", sales: 12400 },
  ],

  "7d": [
    { date: "23/09", sales: 8200 },
    { date: "24/09", sales: 10400 },
    { date: "25/09", sales: 7800 },
    { date: "26/09", sales: 12600 },
    { date: "27/09", sales: 9800 },
    { date: "28/09", sales: 14300 },
    { date: "29/09", sales: 11200 },
  ],

  "30d": [
    { date: "01/09", sales: 8200 },
    { date: "05/09", sales: 10400 },
    { date: "10/09", sales: 7800 },
    { date: "15/09", sales: 12600 },
    { date: "20/09", sales: 9800 },
    { date: "25/09", sales: 14300 },
    { date: "29/09", sales: 11200 },
  ],

  month: [
    { date: "01/09", sales: 8200 },
    { date: "08/09", sales: 10400 },
    { date: "15/09", sales: 7800 },
    { date: "22/09", sales: 12600 },
    { date: "29/09", sales: 11200 },
  ],
};


export const metricsByPeriod = {
  today: [
    {
      title: "Vendas",
      value: "R$ 12.400,00",
      variation: "+5,2%",
      description: "vs. período anterior",
    },
    {
      title: "Pedidos",
      value: "18",
      variation: "+12,5%",
      description: "vs. período anterior",
    },
    {
      title: "Clientes",
      value: "42",
      variation: "+8,1%",
      description: "vs. período anterior",
    },
    {
      title: "Conversão",
      value: "3,12%",
      variation: "+0,28 p.p.",
      description: "vs. período anterior",
    },
  ],

  "7d": [
    {
      title: "Vendas",
      value: "R$ 68.420,00",
      variation: "+9,8%",
      description: "vs. período anterior",
    },
    {
      title: "Pedidos",
      value: "94",
      variation: "+6,7%",
      description: "vs. período anterior",
    },
    {
      title: "Clientes",
      value: "318",
      variation: "+4,9%",
      description: "vs. período anterior",
    },
    {
      title: "Conversão",
      value: "2,91%",
      variation: "+0,21 p.p.",
      description: "vs. período anterior",
    },
  ],

  "30d": metrics,

  month: [
    {
      title: "Vendas",
      value: "R$ 84.250,00",
      variation: "+12,5%",
      description: "vs. período anterior",
    },
    {
      title: "Pedidos",
      value: "126",
      variation: "+8,6%",
      description: "vs. período anterior",
    },
    {
      title: "Clientes",
      value: "1.842",
      variation: "+5,2%",
      description: "vs. período anterior",
    },
    {
      title: "Conversão",
      value: "2,84%",
      variation: "+0,34 p.p.",
      description: "vs. período anterior",
    },
  ],
};