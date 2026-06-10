import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminPage = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [diagnostics, setDiagnostics] = useState([]);
  const [tradeIns, setTradeIns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.is_admin) {
      navigate('/');
      return;
    }
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const [diagResponse, tradeResponse] = await Promise.all([
        axios.get(`${API}/admin/diagnostics`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API}/admin/trade-ins`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);
      setDiagnostics(diagResponse.data);
      setTradeIns(tradeResponse.data);
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8" data-testid="admin-page-title">Admin Dashboard</h1>

        <Tabs defaultValue="diagnostics" className="space-y-6">
          <TabsList className="bg-white border border-slate-200 rounded-xl p-1">
            <TabsTrigger value="diagnostics" className="rounded-lg" data-testid="admin-diagnostics-tab">
              Diagnostic Requests ({diagnostics.length})
            </TabsTrigger>
            <TabsTrigger value="trade-ins" className="rounded-lg" data-testid="admin-trade-ins-tab">
              Trade-In Requests ({tradeIns.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostics">
            <div className="space-y-4">
              {diagnostics.map((request) => (
                <div
                  key={request.request_id}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                  data-testid={`diagnostic-request-${request.request_id}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Name</p>
                      <p className="font-semibold text-slate-900">{request.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone Model</p>
                      <p className="font-semibold text-slate-900">{request.phone_model}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-semibold text-slate-900">{request.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-semibold text-slate-900">{request.phone}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-slate-500">Issue Description</p>
                      <p className="text-slate-900">{request.issue_description}</p>
                    </div>
                    {request.preferred_date && (
                      <div>
                        <p className="text-sm text-slate-500">Preferred Date</p>
                        <p className="font-semibold text-slate-900">{request.preferred_date}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-slate-500">Status</p>
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                        {request.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {diagnostics.length === 0 && (
                <div className="text-center py-12" data-testid="no-diagnostics-message">
                  <p className="text-slate-600">No diagnostic requests yet</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="trade-ins">
            <div className="space-y-4">
              {tradeIns.map((request) => (
                <div
                  key={request.request_id}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                  data-testid={`trade-in-request-${request.request_id}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Name</p>
                      <p className="font-semibold text-slate-900">{request.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone Model</p>
                      <p className="font-semibold text-slate-900">{request.phone_model}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-semibold text-slate-900">{request.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-semibold text-slate-900">{request.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Storage</p>
                      <p className="font-semibold text-slate-900">{request.storage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Condition</p>
                      <p className="font-semibold text-slate-900">{request.condition}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Quote Amount</p>
                      <p className="text-2xl font-bold text-emerald-600">R{request.quote_amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Status</p>
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                        {request.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {tradeIns.length === 0 && (
                <div className="text-center py-12" data-testid="no-trade-ins-message">
                  <p className="text-slate-600">No trade-in requests yet</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;