// components/users/filters/Filter.js
'use client';

import { useState } from 'react';
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiCheck, FiStar, FiHome, FiLayers, FiBriefcase, FiShoppingBag, FiMapPin } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { AmenitiesSelect, FurnishingStatusSelect, PostedBySelect, PropertyTypeSelect } from '@/staticData/OptionMenus';
const Filter = ({ initialFilters = {} }) => {
    const [activeFilters, setActiveFilters] = useState({
        propertyType: initialFilters.propertyType || [],
        budget: initialFilters.budget || [],
        bedrooms: initialFilters.bedrooms || [],
        furnishing: initialFilters.furnishing || [],
        listedBy: initialFilters.listedBy || [],
        amenities: initialFilters.amenities || [],
    });
    const router = useRouter();

    const applyFilters = () => {
        const params = new URLSearchParams();

        // Convert filter keys to query params
        Object.entries(activeFilters).forEach(([key, values]) => {
            values.forEach(value => params.append(key, value));
        });
        params.set('page', '1');
        // Navigate to same page with new filters
        router.push(`/properties/?${params.toString()}`);
    };
    const [expandedSection, setExpandedSection] = useState('propertyType'); // Default open first section

    // Filter Options Data
    const filterData = {
        propertyType: PropertyTypeSelect,
        budget: [
            { value: '0-5000', label: 'Under ₹5k' },
            { value: '5000-10000', label: '₹5k - ₹10k' },
            { value: '10000-20000', label: '₹10k - ₹20k' },
            { value: '20000-30000', label: '₹20k - ₹30k' },
            { value: '30000-50000', label: '₹30k - ₹50k' },
            { value: '50000+', label: 'Over ₹50k' }
        ],
        bedrooms: [
            { value: '1', label: '1 BHK' },
            { value: '2', label: '2 BHK' },
            { value: '3', label: '3 BHK' },
            { value: '4', label: '4 BHK' },
            { value: '4+', label: '4+ BHK' }
        ],
        furnishing: FurnishingStatusSelect,
        listedBy: PostedBySelect,
        amenities: AmenitiesSelect
    };


    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const toggleFilter = (category, value) => {
        setActiveFilters(prev => {
            const currentFilters = [...prev[category]];
            const index = currentFilters.indexOf(value);

            if (index === -1) {
                currentFilters.push(value);
            } else {
                currentFilters.splice(index, 1);
            }

            return { ...prev, [category]: currentFilters };
        });
    };

    const resetFilters = () => {
        setActiveFilters({
            propertyType: [],
            budget: [],
            bedrooms: [],
            furnishing: [],
            listedBy: [],
            amenities: [],
        });
    };

    const activeFilterCount = Object.values(activeFilters).flat().length;

    // Render Filter Section Component
    const renderFilterSection = (sectionKey, title, isIconGrid = false) => (
        <div className="bg-white rounded-xl p-3 shadow-sm border border-orange-50 transition-all duration-200">
            <button
                onClick={() => toggleSection(sectionKey)}
                className="flex justify-between items-center w-full text-left group"
            >
                <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded-md ${expandedSection === sectionKey ? 'bg-orange-100' : 'bg-gray-100'} group-hover:bg-orange-50`}>
                        {sectionKey === 'propertyType' && <FiHome className="text-orange-500" />}
                        {sectionKey === 'budget' && <FiLayers className="text-orange-500" />}
                        {sectionKey === 'bedrooms' && <FiHome className="text-orange-500" />}
                        {sectionKey === 'furnishing' && <FiStar className="text-orange-500" />}
                        {sectionKey === 'listedBy' && <FiBriefcase className="text-orange-500" />}
                        {sectionKey === 'amenities' && <FiCheck className="text-orange-500" />}
                    </div>
                    <h4 className="font-bold text-orange-800">{title}</h4>
                </div>
                {expandedSection === sectionKey ? (
                    <FiChevronUp className="text-orange-500" />
                ) : (
                    <FiChevronDown className="text-gray-400 group-hover:text-orange-500" />
                )}
            </button>

            {expandedSection === sectionKey && (
                <div className={`mt-3 ${isIconGrid ? 'grid grid-cols-2 gap-2' : 'space-y-2'}`}>
                    {(filterData[sectionKey] ?? [])?.map(item => (
                        <button
                            key={item?.value}
                            onClick={() => toggleFilter(sectionKey, item?.value)}
                            className={`
                w-full flex items-center justify-between p-2 px-3 rounded-lg transition-all
                ${activeFilters[sectionKey].includes(item?.value)
                                    ? 'bg-orange-400 text-white'
                                    : isIconGrid
                                        ? 'bg-gray-100 hover:bg-orange-50 text-gray-800 border border-gray-200'
                                        : 'bg-gray-100 hover:bg-orange-50 text-gray-800'
                                }
              `}
                        >
                            {isIconGrid ? (
                                <div className="flex flex-col items-center w-full">
                                    <div className="mb-1">{item?.icon}</div>
                                    <span className="text-xs font-medium">{item?.label}</span>
                                </div>
                            ) : (
                                <>
                                    <span>{item?.label}</span>
                                    {activeFilters[sectionKey].includes(item?.value) && <FiCheck />}
                                </>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full lg:w-80 bg-gradient-to-b from-orange-50 to-white rounded-xl shadow-lg overflow-hidden border border-orange-100 transform transition-all duration-300 hover:shadow-orange-100">
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-300 rounded-full transform translate-x-10 -translate-y-10 opacity-20"></div>
                <div className="relative z-10">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <FiFilter className="text-xl" />
                        </div>
                        <h3 className="text-[20px] font-bold tracking-wide">REFINE SEARCH</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        {activeFilterCount > 0 && (
                            <div className="mt-2 text-xs font-medium text-orange-100">
                                {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} applied
                            </div>
                        )}
                        {activeFilterCount > 0 && (
                            <button
                                onClick={resetFilters}
                                className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-[12px] font-medium transition-all backdrop-blur-sm"
                            >
                                <FiX size={14} />
                                <span>Clear All</span>
                            </button>
                        )}
                    </div>

                </div>
            </div>

            {/* Filter Sections */}
            <div className="px-4 min-h-[480px] py-10 space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto">
                {renderFilterSection('propertyType', 'Property Type', true)}
                {renderFilterSection('budget', 'Budget Range')}
                {renderFilterSection('bedrooms', 'Bedrooms')}
                {renderFilterSection('furnishing', 'Furnishing')}
                {renderFilterSection('listedBy', 'Listed By')}
                {renderFilterSection('amenities', 'Amenities')}
            </div>

            {/* Sticky Apply Button */}
            <div className="sticky bottom-0 bg-white pt-4 border-t border-orange-100 px-4 pb-4">
                <button
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-bold tracking-wide shadow-lg hover:shadow-orange-200 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                    onClick={applyFilters}
                >
                    APPLY FILTERS
                </button>
            </div>
        </div>
    );
};

export default Filter;