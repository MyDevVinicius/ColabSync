import React, { useEffect, useState } from "react";
import Layout from "../layout";

const Monitoramento = () => {
  const [maquinas, setMaquinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    const interval = setInterval(fetchMaquinas, 10000);
    return () => clearInterval(interval);
  }, []);

  const now = Date.now();

  return (
    <Layout>
      <div className="px-4 py-6 max-w-screen-xl mx-auto space-y-4">
        {loading && <p>Carregando dados...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
        {!loading && !error && maquinas.length === 0 && (
          <p>Nenhuma máquina registrada.</p>
        )}

        {!loading && !error && maquinas.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {maquinas.map((m, idx) => {
              const elapsed = now - m.lastSeen;
              const isOnline = elapsed < 60000;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-3 border border-gray-200 flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold truncate">
                      {m["Nome do Computador"]}
                    </h3>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isOnline ? "bg-green-500" : "bg-red-500"
                      }`}
                      title={isOnline ? "Ativo" : "Desconectado"}
                    />
                  </div>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Usuário:</span>{" "}
                    {m["Usuário Logado"]}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Status:</span>{" "}
                    {isOnline ? "Ativo" : "Desconectado"}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Atualizado:</span>{" "}
                    {formatElapsedTime(elapsed)}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">IP:</span> {m["Endereço IP"]}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">MAC:</span>{" "}
                    {m["MAC (Wi-Fi)"] || m["MAC (Cabo)"] || "-"}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Monitoramento;
