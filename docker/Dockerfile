# Age of Mythos — website + game-data API container.
# Build context is the repo root. Only the Python app (app/) is copied in; the
# story content is NOT baked into the image — docker-compose bind-mounts it
# read-only at /world so edits show up live and the image stays small.
FROM python:3.12-slim

WORKDIR /srv
ENV PYTHONUNBUFFERED=1 \
    AOM_REPO_ROOT=/world \
    AOM_HOST=0.0.0.0 \
    AOM_PORT=5566

COPY app/pyproject.toml ./
COPY app/aom ./aom
RUN pip install --no-cache-dir .

EXPOSE 5566
CMD ["python", "-m", "aom.web.main"]
