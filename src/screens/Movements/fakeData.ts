/**
 * Hay que transformar la información para organizarla por secciones según la fecha
 * como en este ejemplo para poder usar el componente SectionList
 */
export const HistoryBySection = [
  {
    title: 'Hoy',
    data: [
      {
        entity: 'Oxxo Gas',
        date: 'Sun Aug 06 2023',
        points: 100,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        id: 1,
      },
      {
        entity: 'Volaris',
        date: 'Sun Aug 01 2023',
        points: 1000,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        id: 2,
      },
    ],
  },
  {
    title: 'Ayer',
    data: [
      {
        entity: 'Oxxo',
        date: 'Sun Aug 06 2023',
        points: 100,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        id: 3,
      },
      {
        entity: 'Volaris',
        date: 'Sun Aug 01 2023',
        points: 1000,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        id: 4,
      },
    ],
  },
  {
    title: 'Semana anterior',
    data: [
      {
        entity: 'Volaris',
        date: 'Sun Aug 01 2023',
        expiryDate: 'Fri Sep 01 2023',
        points: 1000,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        giftCode: '42738499092812000',
        id: 5,
      },
      {
        entity: 'Doña Tota',
        date: 'Mon July 10 2023',
        expiryDate: 'Fri Sep 01 2023',
        points: 1250,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        giftCode: '42738499092812000',
        id: 6,
      },
    ],
  },
];
