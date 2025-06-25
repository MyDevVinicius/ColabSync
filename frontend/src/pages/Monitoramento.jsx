import React, { useEffect, useState } from "react";
import Layout from "../layout";

const Monitoramento = () => {
  const [maquinas, setMaquinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função que formata o tempo decorrido (em ms) em string "Xm Ys"
  const formatElapsedTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m > 0 ? m + "m " : ""}${s}s`;
  };

  const fetchMaquinas = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/maquinas");
      if (!res.ok) throw new Error("Erro ao buscar dados");
      const data = await res.json();
      setMaquinas(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMaquinas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaquinas();
    const interval = setInterval(fetchMaquinas, 10000); // Atualiza a cada 10s
    return () => clearInterval(interval);
  }, []);

  const now = Date.now();

  return (
    <Layout>
      <div className="p-4 full flex flex-col justify-center h-[5rem] items-center">
        <h1 className="text-2xl font-bold mb-4">Monitoramento de Ativos</h1>

        {loading && <p>Carregando dados...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
        {!loading && !error && maquinas.length === 0 && (
          <p>Nenhuma máquina registrada.</p>
        )}

        {!loading && !error && maquinas.length > 0 && (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 sticky top-0">
                <th className="border border-gray-300 px-3 py-1 text-left">
                  Nome da Máquina
                </th>
                <th className="border border-gray-300 px-3 py-1 text-left">
                  Usuário Logado
                </th>
                <th className="border border-gray-300 px-3 py-1 text-left">
                  Status
                </th>
                <th className="border border-gray-300 px-3 py-1 text-left">
                  Tempo desde última atualização
                </th>
                <th className="border border-gray-300 px-3 py-1 text-left">
                  Endereço IP
                </th>
                <th className="border border-gray-300 px-3 py-1 text-left">
                  MAC
                </th>
              </tr>
            </thead>
            <tbody>
              {maquinas.map((m, idx) => {
                const elapsed = now - m.lastSeen;
                const isOnline = elapsed < 60000; // online se atualizado nos últimos 60s

                return (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-3 py-1">
                      {m["Nome do Computador"]}
                    </td>
                    <td className="border border-gray-300 px-3 py-1">
                      {m["Usuário Logado"]}
                    </td>
                    <td className="border border-gray-300 px-3 py-1">
                      <span
                        style={{
                          display: "inline-block",
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: isOnline ? "green" : "red",
                          marginRight: 6,
                        }}
                        title={isOnline ? "Ativo" : "Desconectado"}
                      />
                      {isOnline ? "Ativo" : "Desconectado"}
                    </td>
                    <td className="border border-gray-300 px-3 py-1">
                      {formatElapsedTime(elapsed)}
                    </td>
                    <td className="border border-gray-300 px-3 py-1">
                      {m["Endereço IP"]}
                    </td>
                    <td className="border border-gray-300 px-3 py-1">
                      {m["MAC (Wi-Fi)"] || m["MAC (Cabo)"] || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default Monitoramento;
