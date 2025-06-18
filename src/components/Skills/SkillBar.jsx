// SkillBar.jsx (Pode continuar a ser um ficheiro separado ou integrar aqui)
import React, { useEffect, useState } from 'react';
import { Progress } from 'antd'; // Importar o componente Progress do AntD

const SkillBar = ({ label, percent, color }) => {
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    // Animar a barra de progresso quando o componente é visível
    if (percent > 0) {
      const timer = setTimeout(() => {
        setDisplayPercent(percent); // Define a percentagem final para a animação
      }, 300); // Pequeno atraso para a animação começar depois do cartão aparecer
      return () => clearTimeout(timer);
    }
  }, [percent]); // A percentagem é passada quando o cartão principal fica visível

  return (
    <div>
      <div className="flex justify-between mb-2 text-gray-700">
        <span className="font-medium">{label}</span>
        <span>{displayPercent}%</span> {/* Mostra a percentagem animada */}
      </div>
      <Progress
        percent={displayPercent} // Usa a percentagem animada
        showInfo={false} // Não mostra o texto da percentagem dentro da barra (já temos um span)
        strokeColor={color} // A cor da barra (será uma cor hexadecimal ou nome de cor)
        size="small" // Tamanho da barra de progresso
        className="skill-progress-antd" // Classe opcional para estilos adicionais
      />
    </div>
  );
};

export default SkillBar;