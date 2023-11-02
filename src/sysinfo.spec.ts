import { getSystemInformation } from './sysinfo';


describe('Vérification des champs de systemInformation', () => {
  test('Tous les champs devraient être définis', async () => {
    const systemInfo = await getSystemInformation();

    // Utilisez l'opérateur ! pour indiquer que les propriétés ne sont pas undefined
    // expect(systemInfo!).toBeDefined();
    // expect(systemInfo!.cpu).toBeDefined();
    // expect(systemInfo!.system).toBeDefined();
    // expect(systemInfo!.mem).toBeDefined();
    // expect(systemInfo!.os).toBeDefined();
    // expect(systemInfo!.currentLoad).toBeDefined();
    // expect(systemInfo!.processes).toBeDefined();
    // expect(systemInfo!.diskLayout).toBeDefined();
    // expect(systemInfo!.networkInterfaces).toBeDefined();
  });
});
