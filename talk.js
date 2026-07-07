// -----------------------------------------------------------------------------
// PrintEzy Partner Desktop
// Temporary printer data used until Electron connects to the Python PrinterService.
//
// This structure intentionally mirrors the future PrinterService response.
// Replace this file later with printerService.getConnectedPrinters().
// -----------------------------------------------------------------------------

export const connectedPrinters = [
  {
    id: "PRINTER001",

    name: "HP LaserJet Pro MFP M125-M126 PCLmS",

    status: "READY",

    isConnected: true,

    isDefault: true,

    supportsBW: true,

    supportsColor: false,
  },

  {
    id: "PRINTER002",

    name: "Samsung M332x 382x 402x Series (USB002)",

    status: "READY",

    isConnected: true,

    isDefault: false,

    supportsBW: true,

    supportsColor: false,
  },

  {
    id: "PRINTER003",

    name: "HP LaserJet Pro MFP M126nw",

    status: "OFFLINE",

    isConnected: false,

    isDefault: false,

    supportsBW: true,

    supportsColor: false,
  },

  {
    id: "PRINTER004",

    name: "Microsoft Print to PDF",

    status: "READY",

    isConnected: true,

    isDefault: false,

    supportsBW: true,

    supportsColor: true,
  },

  {
    id: "PRINTER005",

    name: "Microsoft XPS Document Writer",

    status: "READY",

    isConnected: true,

    isDefault: false,

    supportsBW: true,

    supportsColor: true,
  },
];
