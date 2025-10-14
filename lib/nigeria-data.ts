export const nigeriaData: Record<
  string,
  {
    cities: Record<
      string,
      {
        branches: Array<{
          name: string
          address: string
          hours: string
        }>
      }
    >
  }
> = {
  Lagos: {
    cities: {
      Ikeja: {
        branches: [
          {
            name: "TastyHub Ikeja GRA",
            address: "15 Obafemi Awolowo Way, Ikeja GRA",
            hours: "Mon-Sun: 9:00 AM - 10:00 PM",
          },
          {
            name: "TastyHub Allen Avenue",
            address: "42 Allen Avenue, Ikeja",
            hours: "Mon-Sun: 10:00 AM - 11:00 PM",
          },
        ],
      },
      Lekki: {
        branches: [
          {
            name: "TastyHub Lekki Phase 1",
            address: "Plot 5, Admiralty Way, Lekki Phase 1",
            hours: "Mon-Sun: 9:00 AM - 11:00 PM",
          },
          {
            name: "TastyHub Ajah",
            address: "KM 22, Lekki-Epe Expressway, Ajah",
            hours: "Mon-Sun: 8:00 AM - 10:00 PM",
          },
        ],
      },
      "Victoria Island": {
        branches: [
          {
            name: "TastyHub VI",
            address: "28 Adeola Odeku Street, Victoria Island",
            hours: "Mon-Sun: 9:00 AM - 11:00 PM",
          },
        ],
      },
      Yaba: {
        branches: [
          {
            name: "TastyHub Yaba",
            address: "120 Herbert Macaulay Way, Yaba",
            hours: "Mon-Sun: 8:00 AM - 10:00 PM",
          },
        ],
      },
    },
  },
  Oyo: {
    cities: {
      Ibadan: {
        branches: [
          {
            name: "TastyHub Bodija",
            address: "Bodija Market Road, Ibadan",
            hours: "Mon-Sun: 9:00 AM - 10:00 PM",
          },
          {
            name: "TastyHub Ring Road",
            address: "Challenge, Ring Road, Ibadan",
            hours: "Mon-Sun: 8:00 AM - 10:00 PM",
          },
        ],
      },
    },
  },
  Abuja: {
    cities: {
      Wuse: {
        branches: [
          {
            name: "TastyHub Wuse 2",
            address: "Plot 1234, Adetokunbo Ademola Crescent, Wuse 2",
            hours: "Mon-Sun: 9:00 AM - 10:00 PM",
          },
        ],
      },
      Garki: {
        branches: [
          {
            name: "TastyHub Garki",
            address: "Area 11, Garki, Abuja",
            hours: "Mon-Sun: 9:00 AM - 10:00 PM",
          },
        ],
      },
      Maitama: {
        branches: [
          {
            name: "TastyHub Maitama",
            address: "Aguiyi Ironsi Street, Maitama",
            hours: "Mon-Sun: 10:00 AM - 11:00 PM",
          },
        ],
      },
    },
  },
}
