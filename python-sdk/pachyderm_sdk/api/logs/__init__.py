# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: api/logs/logs.proto
# plugin: python-betterproto
# This file has been @generated
from dataclasses import dataclass
from datetime import datetime
from typing import (
    TYPE_CHECKING,
    AsyncIterator,
    Dict,
    Iterator,
    Optional,
)

import betterproto
import betterproto.lib.google.protobuf as betterproto_lib_google_protobuf
import grpc

from .. import pps as _pps__


if TYPE_CHECKING:
    import grpc


class LogLevel(betterproto.Enum):
    """
    LogLevel selects a log level. Pachyderm services only have DEBUG, INFO, and
    ERROR.
    """

    LOG_LEVEL_DEBUG = 0
    LOG_LEVEL_INFO = 1
    LOG_LEVEL_ERROR = 2


@dataclass(eq=False, repr=False)
class LogQuery(betterproto.Message):
    """LogQuery names a source of logs."""

    user: "UserLogQuery" = betterproto.message_field(1, group="query_type")
    """A user query; covering day-to-day Pachyderm use cases."""

    admin: "AdminLogQuery" = betterproto.message_field(2, group="query_type")
    """
    A more broad log query that requires special permissions; useful for
    debugging Pachyderm itself.
    """


@dataclass(eq=False, repr=False)
class AdminLogQuery(betterproto.Message):
    logql: str = betterproto.string_field(1, group="admin_type")
    """Arbitrary LogQL query."""

    pod: str = betterproto.string_field(2, group="admin_type")
    """A pod's logs (all containers)."""

    pod_container: "PodContainer" = betterproto.message_field(3, group="admin_type")
    """One container."""

    app: str = betterproto.string_field(4, group="admin_type")
    """One "app" (logql -> {app=X})."""

    master: "PipelineLogQuery" = betterproto.message_field(5, group="admin_type")
    """All master worker lines from a pipeline."""

    storage: "PipelineLogQuery" = betterproto.message_field(6, group="admin_type")
    """All storage container lines from a pipeline."""

    user: "UserLogQuery" = betterproto.message_field(7, group="admin_type")
    """All worker lines from a pipeline/job."""


@dataclass(eq=False, repr=False)
class PodContainer(betterproto.Message):
    """PodContainer identifies a container running in a Pod."""

    pod: str = betterproto.string_field(1)
    """The full name of the pod."""

    container: str = betterproto.string_field(2)
    """The name of the container."""


@dataclass(eq=False, repr=False)
class UserLogQuery(betterproto.Message):
    """
    A UserLogQuery selects logs that Pachyderm users need to see during normal
    Pachyderm operations.
    """

    project: str = betterproto.string_field(1, group="user_type")
    """All pipelines in the project."""

    pipeline: "PipelineLogQuery" = betterproto.message_field(2, group="user_type")
    """One pipeline in a project."""

    datum: str = betterproto.string_field(3, group="user_type")
    """One datum, by hex-encoded ID."""

    job: str = betterproto.string_field(4, group="user_type")
    """One job by hex-encoded ID, across pipelines and projects."""

    pipeline_job: "PipelineJobLogQuery" = betterproto.message_field(
        5, group="user_type"
    )
    """One job in one pipeline."""

    job_datum: "JobDatumLogQuery" = betterproto.message_field(6, group="user_type")
    """One datum in one job"""


@dataclass(eq=False, repr=False)
class PipelineLogQuery(betterproto.Message):
    """PipelineLogQuery selects all logs from all runs of a named pipeline."""

    project: str = betterproto.string_field(1)
    """The project the pipeline is in."""

    pipeline: str = betterproto.string_field(2)
    """The name of the pipeline."""


@dataclass(eq=False, repr=False)
class PipelineJobLogQuery(betterproto.Message):
    """
    PipelineJobLogQuery selects all logs from a job that a named pipeline
    performed.
    """

    pipeline: "PipelineLogQuery" = betterproto.message_field(1)
    """The pipeline."""

    job: str = betterproto.string_field(2)
    """The hex-encoded ID of the job."""


@dataclass(eq=False, repr=False)
class JobDatumLogQuery(betterproto.Message):
    """
    JobDatumLogQuery returns logs from the processing of one datum that was
    part of the job.
    """

    job: str = betterproto.string_field(1)
    """The hex-encoded ID of the job."""

    datum: str = betterproto.string_field(2)
    """The hex-encoded ID of the datum."""


@dataclass(eq=False, repr=False)
class LogFilter(betterproto.Message):
    """A LogFilter selects which log lines are returned."""

    time_range: "TimeRangeLogFilter" = betterproto.message_field(1)
    """If set, only return logs in the provided time range."""

    limit: int = betterproto.uint64_field(2)
    """If set, return at maximum this number of logs."""

    regex: "RegexLogFilter" = betterproto.message_field(3)
    """If set, only return logs that match this regular expression."""

    level: "LogLevel" = betterproto.enum_field(4)
    """
    If set, only return logs that are greater than or equal to this log level.
    (DEBUG returns DEBUG, INFO, ERROR, INFO returns INFO and ERROR, etc.).
    """

    user_logs_only: bool = betterproto.bool_field(5)
    """
    If true, only return logs from user code, excluding matched log messages
    only related to internal Pachyderm operations.
    """


@dataclass(eq=False, repr=False)
class TimeRangeLogFilter(betterproto.Message):
    """
    A TimeRangeLogFilter selects logs within a time range.  Either or both
    timestamps can be null. If from is after until, logs will be returns in
    reverse order.  (The first log you see will always be from the "from"
    time.)
    """

    from_: datetime = betterproto.message_field(1)
    """
    Where in time to start returning logs from; includes logs with this exact
    timestamp.  If null, starts at the beginning of time.
    """

    until: datetime = betterproto.message_field(2)
    """
    Where in time to stop returning logs from; includes logs with this exact
    timestamp.  If null, ends at the end of time.
    """

    offset: int = betterproto.uint64_field(3)
    """
    Offset from which to return results, in the case of multiple entries from
    the same nanosecond.
    """


@dataclass(eq=False, repr=False)
class RegexLogFilter(betterproto.Message):
    pattern: str = betterproto.string_field(1)
    negate: bool = betterproto.bool_field(2)


@dataclass(eq=False, repr=False)
class GetLogsRequest(betterproto.Message):
    query: "LogQuery" = betterproto.message_field(1)
    filter: "LogFilter" = betterproto.message_field(2)
    tail: bool = betterproto.bool_field(3)
    want_paging_hint: bool = betterproto.bool_field(4)


@dataclass(eq=False, repr=False)
class GetLogsResponse(betterproto.Message):
    paging_hint: "PagingHint" = betterproto.message_field(1, group="response_type")
    log: "LogMessage" = betterproto.message_field(2, group="response_type")


@dataclass(eq=False, repr=False)
class PagingHint(betterproto.Message):
    older: "GetLogsRequest" = betterproto.message_field(1)
    newer: "GetLogsRequest" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class VerbatimLogMessage(betterproto.Message):
    line: bytes = betterproto.bytes_field(1)
    timestamp: datetime = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class LogMessage(betterproto.Message):
    verbatim: "VerbatimLogMessage" = betterproto.message_field(1)
    """The verbatim line from Loki"""

    object: "betterproto_lib_google_protobuf.Struct" = betterproto.message_field(2)
    """A raw JSON parse of the entire line"""

    native_timestamp: datetime = betterproto.message_field(3)
    """If a parseable timestamp was found in `fields`"""

    pps_log_message: "_pps__.LogMessage" = betterproto.message_field(4)
    """For code that wants to filter on pipeline/job/etc"""


class ApiStub:

    def __init__(self, channel: "grpc.Channel"):
        self.__rpc_get_logs = channel.unary_stream(
            "/logs.API/GetLogs",
            request_serializer=GetLogsRequest.SerializeToString,
            response_deserializer=GetLogsResponse.FromString,
        )

    def get_logs(
        self,
        *,
        query: "LogQuery" = None,
        filter: "LogFilter" = None,
        tail: bool = False,
        want_paging_hint: bool = False
    ) -> Iterator["GetLogsResponse"]:

        request = GetLogsRequest()
        if query is not None:
            request.query = query
        if filter is not None:
            request.filter = filter
        request.tail = tail
        request.want_paging_hint = want_paging_hint

        for response in self.__rpc_get_logs(request):
            yield response
