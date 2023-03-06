"use client";
import useSWR from "swr";
import Select from "react-select";
const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-0301",
  });
  return (
    <div>
      <Select
        className="mt-2"
        id="selectModel"
        instanceId="sm"
        options={models?.modelOptions}
        defaultValue={model}
         placeholder={model}
         isSearchable
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654] text-white",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
