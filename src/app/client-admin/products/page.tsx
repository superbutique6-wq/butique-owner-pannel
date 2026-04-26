import React from 'react';
import { Plus, Search, Filter, MoreHorizontal, Image as ImageIcon } from 'lucide-react';

export default function ClientProductsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Products Catalog</h1>
        <button className="flex items-center space-x-2 bg-[#1C1C1C] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-sm">
          <Plus size={16} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5C1CD] focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 text-sm text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Inventory</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <ProductRow name="Rose Zari Anarkali" category="Suits" price="₹12,499" stock={15} status="Active" image="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2546&auto=format&fit=crop" />
              <ProductRow name="Ivory Silk Blouse" category="Blouses" price="₹4,999" stock={8} status="Active" image="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=2602&auto=format&fit=crop" />
              <ProductRow name="Charcoal Drape Dress" category="Dresses" price="₹8,999" stock={0} status="Out of Stock" image="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2574&auto=format&fit=crop" />
              <ProductRow name="Blush Floral Lehenga" category="Sets" price="₹24,500" stock={3} status="Low Stock" image="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=2574&auto=format&fit=crop" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductRow({ name, category, price, stock, status, image }: { name: string, category: string, price: string, stock: number, status: string, image: string }) {
  const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'Out of Stock': 'bg-red-100 text-red-700',
    'Low Stock': 'bg-yellow-100 text-yellow-700'
  }[status];

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6 relative flex items-center space-x-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-16 object-cover rounded shadow-sm" />
        ) : (
          <div className="w-12 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400"><ImageIcon size={20} /></div>
        )}
        <span className="font-medium text-gray-900">{name}</span>
      </td>
      <td className="py-4 px-6 text-gray-500">{category}</td>
      <td className="py-4 px-6 font-medium text-gray-900">{price}</td>
      <td className="py-4 px-6">
        <div>
          <span className="text-gray-900 font-medium">{stock} in stock</span>
          <br />
          <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${statusColors}`}>
            {status}
          </span>
        </div>
      </td>
      <td className="py-4 px-6 text-right">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </td>
    </tr>
  );
}
