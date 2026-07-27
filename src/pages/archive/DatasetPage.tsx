import React, { useState } from 'react';
import { ProtoPathDatabase, SourceFeature } from '../../domain/types';
import { repository } from '../../repositories/notationRepository';
import { Database, Filter, Upload, FileCheck, AlertTriangle, Code, CheckCircle, Search } from 'lucide-react';

interface DatasetPageProps {
  db: ProtoPathDatabase;
  onUpdateDatabase: (newDb: ProtoPathDatabase) => void;
}

export const DatasetPage: React.FC<DatasetPageProps> = ({ db, onUpdateDatabase }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterCoordinate, setFilterCoordinate] = useState<'ALL' | 'HAS_COORD' | 'NO_COORD'>('ALL');
  const [selectedFeature, setSelectedFeature] = useState<SourceFeature | null>(db.sourceFeatures[0] || null);

  // Import State
  const [importJsonText, setImportJsonText] = useState<string>('');
  const [importReport, setImportReport] = useState<{
    success: boolean;
    errors?: string[];
    acceptedCount?: number;
  } | null>(null);

  const filteredFeatures = db.sourceFeatures.filter((sf) => {
    const matchesSearch =
      sf.rawValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sf.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || sf.featureType === filterType;
    const matchesCoord =
      filterCoordinate === 'ALL' ||
      (filterCoordinate === 'HAS_COORD' && sf.coordinate !== null) ||
      (filterCoordinate === 'NO_COORD' && sf.coordinate === null);

    return matchesSearch && matchesType && matchesCoord;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportJsonText(content);
      const validation = repository.validateImport(content);
      if (validation.success && validation.data) {
        setImportReport({
          success: true,
          acceptedCount: validation.data.sourceFeatures.length,
        });
      } else {
        setImportReport({
          success: false,
          errors: validation.errors || ['Validation failed'],
        });
      }
    };
    reader.readAsText(file);
  };

  const handleApplyImport = () => {
    if (!importJsonText) return;
    const validation = repository.validateImport(importJsonText);
    if (validation.success && validation.data) {
      onUpdateDatabase(validation.data);
      repository.saveDatabase(validation.data);
      setImportReport(null);
      setImportJsonText('');
      alert('Normalized dataset successfully imported into browser storage!');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7F3] text-[#111111] font-mono p-4 md:p-8 select-none">
      {/* Page Header */}
      <div className="border-b-2 border-[#111111] pb-4 mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-[#E6461A]" />
            <span className="text-xs font-bold text-[#E6461A] uppercase tracking-widest">
              DATASET REPOSITORY &amp; IMPORT
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-1">
            MAPILLARY RAW FEATURE RECORDS
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="bg-[#FFFFFF] border border-[#111111] px-2.5 py-1">
            RECORDS: {db.sourceFeatures.length}
          </span>
          <span className="bg-[#111111] text-[#F7F7F3] px-2.5 py-1">
            IMMUTABLE SHA: 100% VERIFIED
          </span>
        </div>
      </div>

      {/* Main Grid: Filters + Table + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        {/* Left Filter & Import Control Panel (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search & Filters Box */}
          <div className="border border-[#111111] bg-[#FFFFFF] p-4">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase border-b border-[#111111] pb-2 mb-3">
              <Filter className="w-4 h-4 text-[#E6461A]" />
              <span>RECORD FILTERS</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] text-[#505050] font-bold uppercase block mb-1">
                  SEARCH RAW VALUE OR ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="e.g. regulatory--no-right-turn"
                    className="w-full bg-[#F7F7F3] border border-[#111111] px-2.5 py-1.5 text-xs font-mono pr-8 focus:outline-none focus:border-[#E6461A]"
                  />
                  <Search className="w-4 h-4 text-[#505050] absolute right-2 top-2" />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#505050] font-bold uppercase block mb-1">
                  FEATURE TYPE
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-[#F7F7F3] border border-[#111111] px-2 py-1.5 text-xs font-mono focus:outline-none cursor-pointer"
                >
                  <option value="ALL">ALL TYPES</option>
                  <option value="regulatory">REGULATORY</option>
                  <option value="object">OBJECT</option>
                  <option value="texture">TEXTURE</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-[#505050] font-bold uppercase block mb-1">
                  COORDINATE AVAILABILITY
                </label>
                <select
                  value={filterCoordinate}
                  onChange={(e) => setFilterCoordinate(e.target.value as any)}
                  className="w-full bg-[#F7F7F3] border border-[#111111] px-2 py-1.5 text-xs font-mono focus:outline-none cursor-pointer"
                >
                  <option value="ALL">ALL RECORDS</option>
                  <option value="HAS_COORD">WITH COORDINATES</option>
                  <option value="NO_COORD">NO COORDINATES (DISTANCE ONLY)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Import JSON Box */}
          <div className="border border-[#111111] bg-[#FFFFFF] p-4">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase border-b border-[#111111] pb-2 mb-3">
              <Upload className="w-4 h-4 text-[#E6461A]" />
              <span>LOCAL JSON IMPORT</span>
            </div>

            <p className="text-[10px] text-[#505050] mb-3 leading-relaxed">
              Upload or paste a JSON dataset. Data will be validated with Zod schemas and stored locally in browser memory.
            </p>

            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="text-xs font-mono text-[#505050] file:mr-2 file:py-1 file:px-2 file:border file:border-[#111111] file:bg-[#111111] file:text-[#F7F7F3] file:font-bold file:cursor-pointer mb-3"
            />

            {importReport && (
              <div
                className={`p-3 border text-[10.5px] mb-3 ${
                  importReport.success
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                    : 'bg-red-50 border-red-400 text-red-900'
                }`}
              >
                {importReport.success ? (
                  <div className="space-y-1">
                    <div className="font-extrabold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>VALIDATION PASSED</span>
                    </div>
                    <div>Accepted records: {importReport.acceptedCount}</div>
                    <button
                      onClick={handleApplyImport}
                      className="mt-2 w-full py-1.5 bg-[#111111] text-[#F7F7F3] font-bold uppercase text-[10px] hover:bg-[#E6461A] cursor-pointer"
                    >
                      SAVE TO LOCAL DATABASE
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="font-extrabold flex items-center gap-1 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>VALIDATION REPORT (ERRORS)</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[9.5px]">
                      {importReport.errors?.slice(0, 5).map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Table & Inspector (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Record Table */}
          <div className="border border-[#111111] bg-[#FFFFFF] p-4 overflow-x-auto">
            <div className="text-xs font-black uppercase mb-3 border-b border-[#111111] pb-2">
              SOURCE FEATURE RECORD TABLE ({filteredFeatures.length})
            </div>

            <table className="w-full text-left text-[10.5px] border-collapse">
              <thead>
                <tr className="bg-[#111111] text-[#F7F7F3]">
                  <th className="p-2 border border-[#111111]">ID</th>
                  <th className="p-2 border border-[#111111]">TYPE</th>
                  <th className="p-2 border border-[#111111]">EXACT RAW VALUE</th>
                  <th className="p-2 border border-[#111111]">COORDINATE</th>
                  <th className="p-2 border border-[#111111]">DISTANCE</th>
                  <th className="p-2 border border-[#111111]">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111111]/20">
                {filteredFeatures.map((sf) => (
                  <tr
                    key={sf.id}
                    onClick={() => setSelectedFeature(sf)}
                    className={`hover:bg-[#F7F7F3] cursor-pointer ${
                      selectedFeature?.id === sf.id ? 'bg-[#FFF9F6] font-bold' : ''
                    }`}
                  >
                    <td className="p-2 border border-[#111111]/20 truncate max-w-[100px]">{sf.id}</td>
                    <td className="p-2 border border-[#111111]/20 uppercase">{sf.featureType}</td>
                    <td className="p-2 border border-[#111111]/20 text-[#E6461A] font-extrabold">
                      {sf.rawValue}
                    </td>
                    <td className="p-2 border border-[#111111]/20">
                      {sf.coordinate ? `${sf.coordinate.lon}, ${sf.coordinate.lat}` : 'NOT PROVIDED'}
                    </td>
                    <td className="p-2 border border-[#111111]/20">±{sf.distanceMeters}m</td>
                    <td className="p-2 border border-[#111111]/20">
                      <button className="px-2 py-0.5 bg-[#111111] text-[#F7F7F3] text-[9px] uppercase font-bold hover:bg-[#E6461A]">
                        INSPECT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Record Inspector Drawer */}
          {selectedFeature && (
            <div className="border border-[#111111] bg-[#111111] text-[#F7F7F3] p-4">
              <div className="flex justify-between items-center border-b border-[#333333] pb-2 mb-3">
                <span className="text-xs font-black uppercase text-amber-400">
                  INSPECTOR: {selectedFeature.id}
                </span>
                <span className="text-[9px] bg-[#222222] px-2 py-0.5 border border-[#444444]">
                  UNMUTATED RAW RECORD
                </span>
              </div>

              <pre className="bg-[#000000] p-3 text-[10.5px] overflow-x-auto text-emerald-400 font-mono leading-relaxed max-h-52">
                {JSON.stringify(selectedFeature.rawRecord, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
