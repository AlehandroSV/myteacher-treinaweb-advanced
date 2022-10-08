from rest_framework.views import APIView
from rest_framework.response import Response


class HomeApiView(APIView):
    def get(self, req, format=None):
        return Response({"nome": "Alehandro", "idade": 18})
