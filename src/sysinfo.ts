import Systeminformation from 'systeminformation';

async function getSystemInformation() {
    return {
      cpu: await Systeminformation.cpu(),
      system: await Systeminformation.system(),
      mem: await Systeminformation.mem(),
      os: await Systeminformation.osInfo(),
      currentLoad: await Systeminformation.currentLoad(),
      processes: await Systeminformation.processes(),
      diskLayout: await Systeminformation.diskLayout(),
      networkInterfaces: await Systeminformation.networkInterfaces(),
    };
  }
  
  export { getSystemInformation };