import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Upload, FileText, Brain, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-gray-900">Dashboard</h1>
          <p className="text-brand-gray-600 mt-2">
            Manage your construction projects and submittals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-brand-gray-900">12</p>
                  <p className="text-brand-gray-600">Active Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Upload className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-brand-gray-900">48</p>
                  <p className="text-brand-gray-600">Specs Uploaded</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-brand-gray-900">156</p>
                  <p className="text-brand-gray-600">AI Analyses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-brand-gray-900">2.3h</p>
                  <p className="text-brand-gray-600">Time Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-gray-600 mb-4">
                This is a placeholder for the project management interface. Here
                you would see your recent construction projects with uploaded
                specifications and generated submittals.
              </p>
              <Button>View All Projects</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload New Specifications
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Brain className="mr-2 h-5 w-5" />
                  Run AI Analysis
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Generate Submittal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
